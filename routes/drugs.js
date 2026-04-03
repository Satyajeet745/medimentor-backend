const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");
const { drugDatabase, knownInteractions } = require("../data/drugDatabase");

require("dotenv").config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

function findInDatabase(diseaseName) {
  const lower = diseaseName.toLowerCase().trim();
  if (drugDatabase[lower]) return drugDatabase[lower];
  for (const key of Object.keys(drugDatabase)) {
    if (lower.includes(key) || key.includes(lower)) return drugDatabase[key];
  }
  const words = lower.split(/\s+/).filter(w => w.length > 3);
  for (const key of Object.keys(drugDatabase)) {
    const matchCount = words.filter(w => key.includes(w)).length;
    if (matchCount >= 2) return drugDatabase[key];
  }
  return null;
}

function getSmartFallback(disease) {
  const d = disease.toLowerCase();
  if (d.includes("diabetes") || d.includes("diabetic") || d.includes("glucose")) return {
    drugs: [
      { name: "Metformin", dosage: "500-1000 mg PO twice daily", category: "Biguanide", isOrphan: false },
      { name: "Glipizide", dosage: "5-10 mg PO once daily", category: "Sulfonylurea", isOrphan: false },
      { name: "Sitagliptin", dosage: "100 mg PO once daily", category: "DPP-4 Inhibitor", isOrphan: false },
      { name: "Empagliflozin", dosage: "10-25 mg PO once daily", category: "SGLT2 Inhibitor", isOrphan: false }
    ], clinicalNote: "Monitor HbA1c every 3 months. Target HbA1c <7%. Lifestyle modification essential."
  };
  if (d.includes("hypertension") || d.includes("blood pressure")) return {
    drugs: [
      { name: "Amlodipine", dosage: "5-10 mg PO once daily", category: "Calcium Channel Blocker", isOrphan: false },
      { name: "Losartan", dosage: "50-100 mg PO once daily", category: "ARB", isOrphan: false },
      { name: "Hydrochlorothiazide", dosage: "12.5-25 mg PO once daily", category: "Thiazide Diuretic", isOrphan: false },
      { name: "Metoprolol", dosage: "25-100 mg PO twice daily", category: "Beta-Blocker", isOrphan: false }
    ], clinicalNote: "Target BP <130/80 mmHg. Monitor renal function and electrolytes regularly."
  };
  if (d.includes("pneumonia") || d.includes("lung infection")) return {
    drugs: [
      { name: "Amoxicillin", dosage: "500 mg PO three times daily x7 days", category: "Penicillin Antibiotic", isOrphan: false },
      { name: "Azithromycin", dosage: "500 mg PO day 1 then 250 mg x4 days", category: "Macrolide Antibiotic", isOrphan: false },
      { name: "Levofloxacin", dosage: "750 mg PO/IV once daily x5 days", category: "Fluoroquinolone", isOrphan: false }
    ], clinicalNote: "Sputum culture before antibiotics. Hospitalize if CURB-65 score is 2 or more."
  };
  if (d.includes("stroke") || d.includes("ischemic")) return {
    drugs: [
      { name: "Aspirin", dosage: "300 mg loading then 75-100 mg daily", category: "Antiplatelet", isOrphan: false },
      { name: "Clopidogrel", dosage: "75 mg PO once daily", category: "Antiplatelet", isOrphan: false },
      { name: "Atorvastatin", dosage: "40-80 mg PO once daily", category: "Statin", isOrphan: false }
    ], clinicalNote: "CT scan mandatory. tPA within 4.5 hours if ischemic stroke confirmed."
  };
  if (d.includes("hemorrhoid") || d.includes("piles") || d.includes("anal")) return {
    drugs: [
      { name: "Hydrocortisone suppository", dosage: "1 suppository rectally twice daily", category: "Topical Corticosteroid", isOrphan: false },
      { name: "Lignocaine ointment", dosage: "Apply topically 3-4 times daily", category: "Local Anesthetic", isOrphan: false },
      { name: "Ispaghula husk", dosage: "One sachet PO twice daily in water", category: "Bulk-Forming Laxative", isOrphan: false },
      { name: "Sitz bath warm water", dosage: "15-20 minutes 3 times daily", category: "Conservative Management", isOrphan: false }
    ], clinicalNote: "High fiber diet and adequate hydration essential. Refer for surgical evaluation if grade 3-4."
  };
  if (d.includes("pain") || d.includes("arthritis")) return {
    drugs: [
      { name: "Ibuprofen", dosage: "400-600 mg PO three times daily with food", category: "NSAID", isOrphan: false },
      { name: "Paracetamol", dosage: "500-1000 mg PO every 6-8 hours", category: "Analgesic", isOrphan: false },
      { name: "Diclofenac", dosage: "50 mg PO three times daily", category: "NSAID", isOrphan: false }
    ], clinicalNote: "Use lowest effective dose. Avoid NSAIDs in renal impairment and GI history."
  };
  if (d.includes("infection") || d.includes("bacterial")) return {
    drugs: [
      { name: "Amoxicillin-Clavulanate", dosage: "875/125 mg PO twice daily x7 days", category: "Beta-Lactam Antibiotic", isOrphan: false },
      { name: "Ciprofloxacin", dosage: "500 mg PO twice daily x5-7 days", category: "Fluoroquinolone", isOrphan: false }
    ], clinicalNote: "Culture and sensitivity before antibiotics when possible."
  };
  return {
    drugs: [{ name: "Consult clinical formulary", dosage: "As per current guidelines", category: "Standard of Care", isOrphan: false }],
    clinicalNote: "Please refer to current clinical guidelines for evidence-based treatment protocols."
  };
}

router.post("/", async (req, res) => {
  const { disease } = req.body;
  if (!disease) return res.status(400).json({ error: "Disease required" });

  const localData = findInDatabase(disease);
  if (localData) return res.json({ drugs: localData.drugs, clinicalNote: localData.clinicalNote, interactions: knownInteractions, source: "local" });

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: "You are a clinical pharmacology AI. Return ONLY valid raw JSON arrays with no markdown, no backticks, no explanation." },
        { role: "user", content: `Suggest top 4 evidence-based drugs for ${disease} with dosages. Return ONLY raw JSON array: [{"name":"drug name","dosage":"exact dosage","category":"drug class","isOrphan":false}]` }
      ],
      temperature: 0.2,
      max_tokens: 400
    });
    const text = completion.choices[0]?.message?.content || "";
    const cleaned = text.replace(/```json|```/g, "").trim();
    const drugs = JSON.parse(cleaned);
    res.json({ drugs, clinicalNote: "Follow evidence-based clinical guidelines. Verify dosages with current formulary.", interactions: knownInteractions, source: "groq" });
  } catch (err) {
    console.error("Groq drugs error:", err.message);
    const fallback = getSmartFallback(disease);
    res.json({ drugs: fallback.drugs, clinicalNote: fallback.clinicalNote, interactions: knownInteractions, source: "fallback" });
  }
});

module.exports = router;
