const drugDatabase = {

  
  "gaucher disease": {
    drugs: [
      { name: "Imiglucerase", dosage: "60 U/kg IV every 2 weeks", category: "Enzyme Replacement", isOrphan: true },
      { name: "Velaglucerase alfa", dosage: "60 U/kg IV every 2 weeks", category: "Enzyme Replacement", isOrphan: true },
      { name: "Eliglustat", dosage: "84 mg PO twice daily", category: "Substrate Reduction", isOrphan: true },
      { name: "Miglustat", dosage: "100 mg PO three times daily", category: "Substrate Reduction", isOrphan: true }
    ],
    clinicalNote: "Enzyme replacement is first-line for symptomatic patients. Monitor CBC and organ size every 6 months."
  },

  "fabry disease": {
    drugs: [
      { name: "Agalsidase alfa", dosage: "0.2 mg/kg IV every 2 weeks", category: "Enzyme Replacement", isOrphan: true },
      { name: "Agalsidase beta", dosage: "1 mg/kg IV every 2 weeks", category: "Enzyme Replacement", isOrphan: true },
      { name: "Migalastat", dosage: "123 mg PO every other day", category: "Pharmacological Chaperone", isOrphan: true }
    ],
    clinicalNote: "Migalastat only for amenable GLA mutations. Monitor renal function annually."
  },

  "wilson disease": {
    drugs: [
      { name: "Trientine hydrochloride", dosage: "750-1500 mg/day divided", category: "Copper Chelator", isOrphan: true },
      { name: "Penicillamine", dosage: "250-500 mg PO four times daily", category: "Copper Chelator", isOrphan: false },
      { name: "Zinc acetate", dosage: "50 mg PO three times daily", category: "Maintenance", isOrphan: false }
    ],
    clinicalNote: "Trientine preferred for neurological presentation."
  },

  "pompe disease": {
    drugs: [
      { name: "Alglucosidase alfa", dosage: "20 mg/kg IV every 2 weeks", category: "Enzyme Replacement", isOrphan: true },
      { name: "Avalglucosidase alfa", dosage: "20 mg/kg IV every 2 weeks", category: "Next-Gen ERT", isOrphan: true }
    ],
    clinicalNote: "Start treatment early. Respiratory monitoring critical."
  },

  "pku": {
    drugs: [
      { name: "Sapropterin", dosage: "5-20 mg/kg/day PO", category: "Cofactor Therapy", isOrphan: true },
      { name: "Pegvaliase", dosage: "2.5 mg SC weekly (titrate)", category: "Enzyme Substitution", isOrphan: true }
    ],
    clinicalNote: "Low-phenylalanine diet essential alongside medication."
  },

  "phenylketonuria": {
    drugs: [
      { name: "Sapropterin", dosage: "5-20 mg/kg/day PO", category: "Cofactor Therapy", isOrphan: true },
      { name: "Pegvaliase", dosage: "2.5 mg SC weekly (titrate)", category: "Enzyme Substitution", isOrphan: true }
    ],
    clinicalNote: "Low-phenylalanine diet essential alongside medication."
  },

  "cystic fibrosis": {
    drugs: [
      { name: "Elexacaftor/Tezacaftor/Ivacaftor", dosage: "2 tabs AM + 1 tab PM", category: "CFTR Modulator Triple", isOrphan: true },
      { name: "Lumacaftor/Ivacaftor", dosage: "400/250 mg PO q12h", category: "CFTR Modulator", isOrphan: true },
      { name: "Ivacaftor", dosage: "150 mg PO q12h", category: "CFTR Potentiator", isOrphan: true }
    ],
    clinicalNote: "Check CFTR genotype first. Trikafta for F508del mutations."
  },

  "huntington disease": {
    drugs: [
      { name: "Deutetrabenazine", dosage: "6-48 mg/day PO divided", category: "VMAT2 Inhibitor", isOrphan: true },
      { name: "Tetrabenazine", dosage: "12.5-50 mg PO three times daily", category: "VMAT2 Inhibitor", isOrphan: false },
      { name: "Valbenazine", dosage: "40-80 mg PO daily", category: "VMAT2 Inhibitor", isOrphan: true }
    ],
    clinicalNote: "Multidisciplinary care essential. Genetic counseling required."
  },

  "huntington's disease": {
    drugs: [
      { name: "Deutetrabenazine", dosage: "6-48 mg/day PO divided", category: "VMAT2 Inhibitor", isOrphan: true },
      { name: "Valbenazine", dosage: "40-80 mg PO daily", category: "VMAT2 Inhibitor", isOrphan: true }
    ],
    clinicalNote: "Multidisciplinary care essential. Genetic counseling required."
  },

  "hae": {
    drugs: [
      { name: "Icatibant", dosage: "30 mg SC per attack", category: "Bradykinin B2 Antagonist", isOrphan: true },
      { name: "C1 Esterase Inhibitor", dosage: "20 U/kg IV per attack", category: "Replacement Therapy", isOrphan: true },
      { name: "Lanadelumab", dosage: "300 mg SC every 2-4 weeks", category: "Prophylaxis", isOrphan: true },
      { name: "Berotralstat", dosage: "150 mg PO daily", category: "Oral Prophylaxis", isOrphan: true }
    ],
    clinicalNote: "Laryngeal attacks are life-threatening - treat immediately."
  },

  "hereditary angioedema": {
    drugs: [
      { name: "Icatibant", dosage: "30 mg SC per attack", category: "Bradykinin B2 Antagonist", isOrphan: true },
      { name: "C1 Esterase Inhibitor", dosage: "20 U/kg IV per attack", category: "Replacement Therapy", isOrphan: true },
      { name: "Lanadelumab", dosage: "300 mg SC every 2-4 weeks", category: "Prophylaxis", isOrphan: true }
    ],
    clinicalNote: "Laryngeal attacks are life-threatening - treat immediately."
  },

  "attr amyloidosis": {
    drugs: [
      { name: "Patisiran", dosage: "0.3 mg/kg IV every 3 weeks", category: "RNA Interference", isOrphan: true },
      { name: "Inotersen", dosage: "284 mg SC weekly", category: "Antisense Oligonucleotide", isOrphan: true },
      { name: "Tafamidis", dosage: "80 mg PO daily", category: "TTR Stabilizer", isOrphan: true },
      { name: "Vutrisiran", dosage: "25 mg SC every 3 months", category: "RNA Interference", isOrphan: true }
    ],
    clinicalNote: "Tafamidis for cardiac ATTR. Patisiran for polyneuropathy."
  },

  "aip": {
    drugs: [
      { name: "Givosiran", dosage: "2.5 mg/kg SC monthly", category: "RNA Interference", isOrphan: true },
      { name: "Hemin (Panhematin)", dosage: "3-4 mg/kg IV daily x4 days", category: "Heme Arginate", isOrphan: true },
      { name: "Glucose loading", dosage: "300-500 g/day IV/PO", category: "Supportive", isOrphan: false }
    ],
    clinicalNote: "Avoid porphyrinogenic drugs. Givosiran prevents recurrence."
  },

  "acute intermittent porphyria": {
    drugs: [
      { name: "Givosiran", dosage: "2.5 mg/kg SC monthly", category: "RNA Interference", isOrphan: true },
      { name: "Hemin (Panhematin)", dosage: "3-4 mg/kg IV daily x4 days", category: "Heme Arginate", isOrphan: true }
    ],
    clinicalNote: "Avoid porphyrinogenic drugs. Givosiran prevents recurrence."
  },

  "alkaptonuria": {
    drugs: [
      { name: "Nitisinone (NTBC)", dosage: "2 mg PO daily", category: "HPPD Inhibitor", isOrphan: true }
    ],
    clinicalNote: "Long-term treatment recommended from early diagnosis."
  },

  "marfan syndrome": {
    drugs: [
      { name: "Losartan", dosage: "50-100 mg PO daily", category: "ARB - Aortic Protection", isOrphan: false },
      { name: "Atenolol", dosage: "25-100 mg PO daily", category: "Beta-Blocker - Aortic Protection", isOrphan: false }
    ],
    clinicalNote: "Annual echocardiography mandatory. Avoid contact sports."
  },

  "duchenne muscular dystrophy": {
    drugs: [
      { name: "Eteplirsen", dosage: "30 mg/kg IV weekly", category: "Exon 51 Skipping", isOrphan: true },
      { name: "Ataluren", dosage: "40 mg/kg/day PO in 3 doses", category: "Nonsense Mutation Readthrough", isOrphan: true },
      { name: "Deflazacort", dosage: "0.9 mg/kg/day PO", category: "Corticosteroid", isOrphan: true }
    ],
    clinicalNote: "Genetic testing mandatory. Respiratory and cardiac monitoring required."
  },

  "dmd": {
    drugs: [
      { name: "Eteplirsen", dosage: "30 mg/kg IV weekly", category: "Exon 51 Skipping", isOrphan: true },
      { name: "Deflazacort", dosage: "0.9 mg/kg/day PO", category: "Corticosteroid", isOrphan: true }
    ],
    clinicalNote: "Respiratory and cardiac monitoring essential."
  },

  "spinal muscular atrophy": {
    drugs: [
      { name: "Nusinersen", dosage: "12 mg intrathecal every 4 months", category: "Antisense Oligonucleotide", isOrphan: true },
      { name: "Onasemnogene abeparvovec", dosage: "Single IV infusion (gene therapy)", category: "Gene Therapy", isOrphan: true },
      { name: "Risdiplam", dosage: "0.2 mg/kg/day PO", category: "SMN2 Splicing Modifier", isOrphan: true }
    ],
    clinicalNote: "Early treatment before symptom onset gives best outcomes."
  },

  "sma": {
    drugs: [
      { name: "Nusinersen", dosage: "12 mg intrathecal every 4 months", category: "Antisense Oligonucleotide", isOrphan: true },
      { name: "Risdiplam", dosage: "0.2 mg/kg/day PO", category: "SMN2 Splicing Modifier", isOrphan: true }
    ],
    clinicalNote: "Early treatment before symptom onset gives best outcomes."
  },

  "rett syndrome": {
    drugs: [
      { name: "Trofinetide", dosage: "200 mg/kg/day PO", category: "IGF-1 Analog", isOrphan: true },
      { name: "Melatonin", dosage: "3-9 mg PO at bedtime", category: "Sleep Aid", isOrphan: false }
    ],
    clinicalNote: "Multidisciplinary approach essential. Monitor for scoliosis."
  },

  "niemann-pick disease": {
    drugs: [
      { name: "Miglustat", dosage: "200 mg PO three times daily", category: "Substrate Reduction", isOrphan: true },
      { name: "Arimoclomol", dosage: "400 mg PO three times daily", category: "Protein Chaperone", isOrphan: true }
    ],
    clinicalNote: "Type C: miglustat slows neurological progression."
  },

  "mucopolysaccharidosis": {
    drugs: [
      { name: "Laronidase", dosage: "0.58 mg/kg IV weekly", category: "Enzyme Replacement", isOrphan: true },
      { name: "Idursulfase", dosage: "0.5 mg/kg IV weekly", category: "Enzyme Replacement", isOrphan: true },
      { name: "Elosulfase alfa", dosage: "2 mg/kg IV weekly", category: "Enzyme Replacement", isOrphan: true }
    ],
    clinicalNote: "Early ERT initiation improves outcomes. Monitor cardiac function."
  },

  "mps": {
    drugs: [
      { name: "Laronidase", dosage: "0.58 mg/kg IV weekly", category: "Enzyme Replacement", isOrphan: true },
      { name: "Idursulfase", dosage: "0.5 mg/kg IV weekly", category: "Enzyme Replacement", isOrphan: true }
    ],
    clinicalNote: "Early ERT initiation improves outcomes."
  },

  "systemic mastocytosis": {
    drugs: [
      { name: "Midostaurin", dosage: "100 mg PO twice daily", category: "KIT Inhibitor", isOrphan: true },
      { name: "Avapritinib", dosage: "200 mg PO daily", category: "KIT/PDGFRA Inhibitor", isOrphan: true },
      { name: "Cladribine", dosage: "5 mg/m2 IV x5 days per cycle", category: "Purine Analog", isOrphan: true }
    ],
    clinicalNote: "D816V KIT mutation guides therapy selection."
  },

  "paroxysmal nocturnal hemoglobinuria": {
    drugs: [
      { name: "Eculizumab", dosage: "600 mg IV weekly x4, then 900 mg biweekly", category: "C5 Complement Inhibitor", isOrphan: true },
      { name: "Ravulizumab", dosage: "Loading + maintenance IV dosing", category: "C5 Complement Inhibitor", isOrphan: true },
      { name: "Pegcetacoplan", dosage: "1080 mg SC twice weekly", category: "C3 Complement Inhibitor", isOrphan: true }
    ],
    clinicalNote: "Vaccinate against encapsulated bacteria before starting. Thrombosis prophylaxis important."
  },

  "pnh": {
    drugs: [
      { name: "Eculizumab", dosage: "600 mg IV weekly x4, then 900 mg biweekly", category: "C5 Complement Inhibitor", isOrphan: true },
      { name: "Ravulizumab", dosage: "Loading + maintenance IV dosing", category: "C5 Complement Inhibitor", isOrphan: true }
    ],
    clinicalNote: "Vaccinate against encapsulated bacteria before starting."
  },

  "aplastic anemia": {
    drugs: [
      { name: "Antithymocyte Globulin (ATG)", dosage: "40 mg/kg/day IV x4 days", category: "Immunosuppressant", isOrphan: true },
      { name: "Cyclosporine", dosage: "5 mg/kg/day PO divided", category: "Calcineurin Inhibitor", isOrphan: false },
      { name: "Eltrombopag", dosage: "150 mg PO daily", category: "Thrombopoietin Receptor Agonist", isOrphan: true }
    ],
    clinicalNote: "HSCT is curative for eligible patients. IST for others."
  },

  "amyotrophic lateral sclerosis": {
    drugs: [
      { name: "Riluzole", dosage: "50 mg PO twice daily", category: "Glutamate Antagonist", isOrphan: true },
      { name: "Edaravone", dosage: "60 mg IV daily x14 days per cycle", category: "Free Radical Scavenger", isOrphan: true },
      { name: "Tofersen", dosage: "100 mg intrathecal every 28 days", category: "Antisense Oligonucleotide", isOrphan: true }
    ],
    clinicalNote: "Multidisciplinary care essential. Nutritional and respiratory support critical."
  },

  "als": {
    drugs: [
      { name: "Riluzole", dosage: "50 mg PO twice daily", category: "Glutamate Antagonist", isOrphan: true },
      { name: "Edaravone", dosage: "60 mg IV daily x14 days per cycle", category: "Free Radical Scavenger", isOrphan: true }
    ],
    clinicalNote: "Multidisciplinary care essential."
  },

  "tuberous sclerosis": {
    drugs: [
      { name: "Everolimus", dosage: "4.5 mg/m2 PO daily", category: "mTOR Inhibitor", isOrphan: true },
      { name: "Vigabatrin", dosage: "50-150 mg/kg/day PO", category: "GABA Transaminase Inhibitor", isOrphan: true }
    ],
    clinicalNote: "Regular brain, kidney, and lung monitoring required."
  },

  "friedreich ataxia": {
    drugs: [
      { name: "Omaveloxolone", dosage: "150 mg PO daily", category: "Nrf2 Activator", isOrphan: true },
      { name: "Idebenone", dosage: "5 mg/kg/day PO divided", category: "Antioxidant", isOrphan: true }
    ],
    clinicalNote: "Cardiac monitoring mandatory. Physical therapy essential."
  },

  "prader-willi syndrome": {
    drugs: [
      { name: "Somatropin (Growth Hormone)", dosage: "0.24 mg/kg/week SC", category: "Growth Hormone", isOrphan: true },
      { name: "Carnitine", dosage: "50-100 mg/kg/day PO", category: "Metabolic Support", isOrphan: false }
    ],
    clinicalNote: "Strict dietary management essential. Behavioral support required."
  },

  "angelman syndrome": {
    drugs: [
      { name: "Clonazepam", dosage: "0.01-0.05 mg/kg/day PO", category: "Benzodiazepine", isOrphan: false },
      { name: "Levetiracetam", dosage: "10-60 mg/kg/day PO", category: "Antiepileptic", isOrphan: false }
    ],
    clinicalNote: "Seizure management is primary focus. Communication therapy essential."
  },

  "primary hyperoxaluria": {
    drugs: [
      { name: "Lumasiran", dosage: "3 mg/kg SC monthly x3 then quarterly", category: "RNA Interference", isOrphan: true },
      { name: "Nedosiran", dosage: "3.3 mg/kg SC monthly", category: "RNA Interference", isOrphan: true },
      { name: "Pyridoxine", dosage: "5-20 mg/kg/day PO", category: "Cofactor", isOrphan: false }
    ],
    clinicalNote: "High fluid intake mandatory. Monitor renal function closely."
  },

  // ============================================
  // 50 COMMON DISEASES WITH STANDARD DRUGS
  // ============================================

  "type 2 diabetes": {
    drugs: [
      { name: "Metformin", dosage: "500-1000 mg PO twice daily", category: "Biguanide", isOrphan: false },
      { name: "Glipizide", dosage: "5-10 mg PO once daily", category: "Sulfonylurea", isOrphan: false },
      { name: "Sitagliptin", dosage: "100 mg PO once daily", category: "DPP-4 Inhibitor", isOrphan: false },
      { name: "Empagliflozin", dosage: "10-25 mg PO once daily", category: "SGLT2 Inhibitor", isOrphan: false }
    ],
    clinicalNote: "Monitor HbA1c every 3 months. Target HbA1c <7%. Lifestyle modification essential."
  },

  "diabetes mellitus": {
    drugs: [
      { name: "Metformin", dosage: "500-1000 mg PO twice daily", category: "Biguanide", isOrphan: false },
      { name: "Glipizide", dosage: "5-10 mg PO once daily", category: "Sulfonylurea", isOrphan: false },
      { name: "Sitagliptin", dosage: "100 mg PO once daily", category: "DPP-4 Inhibitor", isOrphan: false }
    ],
    clinicalNote: "Monitor HbA1c every 3 months. Lifestyle modification essential."
  },

  "hypertension": {
    drugs: [
      { name: "Amlodipine", dosage: "5-10 mg PO once daily", category: "Calcium Channel Blocker", isOrphan: false },
      { name: "Losartan", dosage: "50-100 mg PO once daily", category: "ARB", isOrphan: false },
      { name: "Hydrochlorothiazide", dosage: "12.5-25 mg PO once daily", category: "Thiazide Diuretic", isOrphan: false },
      { name: "Metoprolol", dosage: "25-100 mg PO twice daily", category: "Beta-Blocker", isOrphan: false }
    ],
    clinicalNote: "Target BP <130/80 mmHg. Monitor renal function and electrolytes."
  },

  "essential hypertension": {
    drugs: [
      { name: "Amlodipine", dosage: "5-10 mg PO once daily", category: "Calcium Channel Blocker", isOrphan: false },
      { name: "Losartan", dosage: "50-100 mg PO once daily", category: "ARB", isOrphan: false },
      { name: "Hydrochlorothiazide", dosage: "12.5-25 mg PO once daily", category: "Thiazide Diuretic", isOrphan: false }
    ],
    clinicalNote: "Target BP <130/80 mmHg. Lifestyle modification essential."
  },

  "asthma": {
    drugs: [
      { name: "Salbutamol (Albuterol)", dosage: "100-200 mcg inhaled PRN", category: "Short-Acting Beta Agonist", isOrphan: false },
      { name: "Budesonide", dosage: "200-400 mcg inhaled twice daily", category: "Inhaled Corticosteroid", isOrphan: false },
      { name: "Montelukast", dosage: "10 mg PO once daily", category: "Leukotriene Receptor Antagonist", isOrphan: false },
      { name: "Formoterol", dosage: "12 mcg inhaled twice daily", category: "Long-Acting Beta Agonist", isOrphan: false }
    ],
    clinicalNote: "Step-up therapy based on severity. Check inhaler technique at every visit."
  },

  "pneumonia": {
    drugs: [
      { name: "Amoxicillin", dosage: "500 mg PO three times daily x7 days", category: "Penicillin Antibiotic", isOrphan: false },
      { name: "Azithromycin", dosage: "500 mg PO day 1 then 250 mg x4 days", category: "Macrolide Antibiotic", isOrphan: false },
      { name: "Doxycycline", dosage: "100 mg PO twice daily x7 days", category: "Tetracycline Antibiotic", isOrphan: false },
      { name: "Levofloxacin", dosage: "750 mg PO/IV once daily x5 days", category: "Fluoroquinolone", isOrphan: false }
    ],
    clinicalNote: "Sputum culture before antibiotics. Hospitalize if CURB-65 score is 2 or more."
  },

  "tuberculosis": {
    drugs: [
      { name: "Rifampicin", dosage: "600 mg PO once daily (2 months intensive)", category: "Rifamycin Antibiotic", isOrphan: false },
      { name: "Isoniazid", dosage: "300 mg PO once daily", category: "Hydrazide Antibiotic", isOrphan: false },
      { name: "Pyrazinamide", dosage: "25 mg/kg PO once daily (2 months)", category: "Pyrazine Antibiotic", isOrphan: false },
      { name: "Ethambutol", dosage: "15-25 mg/kg PO once daily", category: "Ethambutol Antibiotic", isOrphan: false }
    ],
    clinicalNote: "RIPE regimen: 2 months intensive + 4 months continuation. DOT recommended."
  },

  "tb": {
    drugs: [
      { name: "Rifampicin", dosage: "600 mg PO once daily", category: "Rifamycin Antibiotic", isOrphan: false },
      { name: "Isoniazid", dosage: "300 mg PO once daily", category: "Hydrazide Antibiotic", isOrphan: false },
      { name: "Pyrazinamide", dosage: "25 mg/kg PO once daily (2 months)", category: "Pyrazine Antibiotic", isOrphan: false },
      { name: "Ethambutol", dosage: "15-25 mg/kg PO once daily", category: "Ethambutol Antibiotic", isOrphan: false }
    ],
    clinicalNote: "RIPE regimen 2 months intensive + 4 months continuation. DOT recommended."
  },

  "gerd": {
    drugs: [
      { name: "Omeprazole", dosage: "20-40 mg PO once daily before breakfast", category: "Proton Pump Inhibitor", isOrphan: false },
      { name: "Pantoprazole", dosage: "40 mg PO once daily", category: "Proton Pump Inhibitor", isOrphan: false },
      { name: "Ranitidine", dosage: "150 mg PO twice daily", category: "H2 Receptor Antagonist", isOrphan: false },
      { name: "Domperidone", dosage: "10 mg PO three times daily before meals", category: "Prokinetic", isOrphan: false }
    ],
    clinicalNote: "Lifestyle modification: avoid fatty food, alcohol, smoking. Elevate head of bed."
  },

  "gastroesophageal reflux disease": {
    drugs: [
      { name: "Omeprazole", dosage: "20-40 mg PO once daily before breakfast", category: "Proton Pump Inhibitor", isOrphan: false },
      { name: "Pantoprazole", dosage: "40 mg PO once daily", category: "Proton Pump Inhibitor", isOrphan: false }
    ],
    clinicalNote: "Lifestyle modification essential. Avoid trigger foods."
  },

  "thyroid disorder": {
    drugs: [
      { name: "Levothyroxine", dosage: "25-150 mcg PO once daily fasting", category: "Thyroid Hormone Replacement", isOrphan: false },
      { name: "Carbimazole", dosage: "15-40 mg PO once daily (hyperthyroid)", category: "Antithyroid Drug", isOrphan: false },
      { name: "Propylthiouracil", dosage: "50-150 mg PO three times daily", category: "Antithyroid Drug", isOrphan: false }
    ],
    clinicalNote: "Monitor TSH every 6-8 weeks until stable then annually."
  },

  "hypothyroidism": {
    drugs: [
      { name: "Levothyroxine", dosage: "25-150 mcg PO once daily fasting", category: "Thyroid Hormone Replacement", isOrphan: false }
    ],
    clinicalNote: "Take on empty stomach 30 minutes before breakfast. Monitor TSH every 6 weeks until stable."
  },

  "hyperthyroidism": {
    drugs: [
      { name: "Carbimazole", dosage: "15-40 mg PO once daily", category: "Antithyroid Drug", isOrphan: false },
      { name: "Propranolol", dosage: "40-80 mg PO twice daily", category: "Beta-Blocker for symptom control", isOrphan: false }
    ],
    clinicalNote: "Monitor thyroid function every 4-6 weeks."
  },

  "influenza": {
    drugs: [
      { name: "Oseltamivir (Tamiflu)", dosage: "75 mg PO twice daily x5 days", category: "Neuraminidase Inhibitor", isOrphan: false },
      { name: "Zanamivir", dosage: "10 mg inhaled twice daily x5 days", category: "Neuraminidase Inhibitor", isOrphan: false },
      { name: "Paracetamol", dosage: "500-1000 mg PO every 6 hours PRN", category: "Antipyretic", isOrphan: false }
    ],
    clinicalNote: "Start within 48 hours of symptom onset. Annual vaccination recommended."
  },

  "allergy": {
    drugs: [
      { name: "Cetirizine", dosage: "10 mg PO once daily", category: "Non-Sedating Antihistamine", isOrphan: false },
      { name: "Loratadine", dosage: "10 mg PO once daily", category: "Non-Sedating Antihistamine", isOrphan: false },
      { name: "Fexofenadine", dosage: "120-180 mg PO once daily", category: "Non-Sedating Antihistamine", isOrphan: false },
      { name: "Montelukast", dosage: "10 mg PO once daily at bedtime", category: "Leukotriene Antagonist", isOrphan: false }
    ],
    clinicalNote: "Identify and avoid allergens. Consider immunotherapy for severe cases."
  },

  "allergic rhinitis": {
    drugs: [
      { name: "Cetirizine", dosage: "10 mg PO once daily", category: "Antihistamine", isOrphan: false },
      { name: "Fluticasone nasal spray", dosage: "2 sprays each nostril once daily", category: "Intranasal Corticosteroid", isOrphan: false },
      { name: "Montelukast", dosage: "10 mg PO once daily", category: "Leukotriene Antagonist", isOrphan: false }
    ],
    clinicalNote: "Intranasal corticosteroids are first-line. Avoid triggers."
  },

  "stroke": {
    drugs: [
      { name: "Aspirin", dosage: "300 mg PO loading then 75-100 mg daily", category: "Antiplatelet", isOrphan: false },
      { name: "Clopidogrel", dosage: "75 mg PO once daily", category: "Antiplatelet", isOrphan: false },
      { name: "Atorvastatin", dosage: "40-80 mg PO once daily", category: "Statin", isOrphan: false },
      { name: "Alteplase (tPA)", dosage: "0.9 mg/kg IV max 90mg within 4.5 hrs", category: "Thrombolytic", isOrphan: false }
    ],
    clinicalNote: "tPA within 4.5 hours of ischemic stroke onset. CT scan mandatory before treatment."
  },

  "ischemic stroke": {
    drugs: [
      { name: "Aspirin", dosage: "300 mg PO loading then 75-100 mg daily", category: "Antiplatelet", isOrphan: false },
      { name: "Alteplase (tPA)", dosage: "0.9 mg/kg IV within 4.5 hours", category: "Thrombolytic", isOrphan: false },
      { name: "Atorvastatin", dosage: "80 mg PO once daily", category: "Statin", isOrphan: false }
    ],
    clinicalNote: "tPA within 4.5 hours of symptom onset. CT scan mandatory."
  },

  "stroke/tia": {
    drugs: [
      { name: "Aspirin", dosage: "300 mg PO loading then 75 mg daily", category: "Antiplatelet", isOrphan: false },
      { name: "Clopidogrel", dosage: "75 mg PO once daily", category: "Antiplatelet", isOrphan: false },
      { name: "Atorvastatin", dosage: "80 mg PO once daily", category: "Statin", isOrphan: false }
    ],
    clinicalNote: "Urgent evaluation required after TIA. CT/MRI within 24 hours."
  },

  "migraine": {
    drugs: [
      { name: "Sumatriptan", dosage: "50-100 mg PO at onset repeat after 2hrs if needed", category: "Triptan", isOrphan: false },
      { name: "Ibuprofen", dosage: "400-600 mg PO at onset", category: "NSAID", isOrphan: false },
      { name: "Topiramate", dosage: "25-100 mg PO daily for prophylaxis", category: "Antiepileptic Prophylaxis", isOrphan: false },
      { name: "Propranolol", dosage: "40-120 mg PO daily for prophylaxis", category: "Beta-Blocker Prophylaxis", isOrphan: false }
    ],
    clinicalNote: "Treat early. Avoid opioids. Identify and avoid triggers."
  },

  "peptic ulcer disease": {
    drugs: [
      { name: "Omeprazole", dosage: "20-40 mg PO once daily x8 weeks", category: "Proton Pump Inhibitor", isOrphan: false },
      { name: "Amoxicillin", dosage: "1000 mg PO twice daily x7 days", category: "Antibiotic H.pylori", isOrphan: false },
      { name: "Clarithromycin", dosage: "500 mg PO twice daily x7 days", category: "Macrolide H.pylori", isOrphan: false }
    ],
    clinicalNote: "Triple therapy for H. pylori eradication. Retest after 4 weeks."
  },

  "peptic ulcer": {
    drugs: [
      { name: "Omeprazole", dosage: "20-40 mg PO once daily x4-8 weeks", category: "Proton Pump Inhibitor", isOrphan: false },
      { name: "Amoxicillin", dosage: "1000 mg PO twice daily x7 days (H.pylori)", category: "Antibiotic", isOrphan: false },
      { name: "Clarithromycin", dosage: "500 mg PO twice daily x7 days (H.pylori)", category: "Macrolide Antibiotic", isOrphan: false }
    ],
    clinicalNote: "Test and treat H. pylori. Avoid NSAIDs and aspirin."
  },

  "chronic kidney disease": {
    drugs: [
      { name: "Amlodipine", dosage: "5-10 mg PO once daily", category: "CCB for BP Control", isOrphan: false },
      { name: "Erythropoietin", dosage: "50-100 U/kg SC 3 times per week", category: "Erythropoiesis Stimulating Agent", isOrphan: false },
      { name: "Sevelamer", dosage: "800-1600 mg PO with meals", category: "Phosphate Binder", isOrphan: false },
      { name: "Calcitriol", dosage: "0.25 mcg PO once daily", category: "Vitamin D Analog", isOrphan: false }
    ],
    clinicalNote: "Monitor GFR, creatinine, electrolytes monthly. Nephrology referral if GFR <30."
  },

  "ckd": {
    drugs: [
      { name: "Amlodipine", dosage: "5-10 mg PO once daily", category: "CCB for BP Control", isOrphan: false },
      { name: "Erythropoietin", dosage: "50-100 U/kg SC 3 times per week", category: "ESA", isOrphan: false },
      { name: "Sevelamer", dosage: "800-1600 mg PO with meals", category: "Phosphate Binder", isOrphan: false }
    ],
    clinicalNote: "Monitor GFR and electrolytes monthly."
  },

  "heart failure": {
    drugs: [
      { name: "Furosemide", dosage: "20-80 mg PO/IV once or twice daily", category: "Loop Diuretic", isOrphan: false },
      { name: "Carvedilol", dosage: "3.125-25 mg PO twice daily", category: "Beta-Blocker", isOrphan: false },
      { name: "Enalapril", dosage: "2.5-10 mg PO twice daily", category: "ACE Inhibitor", isOrphan: false },
      { name: "Spironolactone", dosage: "25-50 mg PO once daily", category: "Aldosterone Antagonist", isOrphan: false }
    ],
    clinicalNote: "Monitor weight daily. Fluid restriction 1.5-2L/day. Low sodium diet."
  },

  "congestive heart failure": {
    drugs: [
      { name: "Furosemide", dosage: "20-80 mg PO/IV once daily", category: "Loop Diuretic", isOrphan: false },
      { name: "Carvedilol", dosage: "3.125-25 mg PO twice daily", category: "Beta-Blocker", isOrphan: false },
      { name: "Enalapril", dosage: "2.5-10 mg PO twice daily", category: "ACE Inhibitor", isOrphan: false }
    ],
    clinicalNote: "Monitor daily weights. Restrict fluid and sodium intake."
  },

  "coronary artery disease": {
    drugs: [
      { name: "Aspirin", dosage: "75-100 mg PO once daily", category: "Antiplatelet", isOrphan: false },
      { name: "Atorvastatin", dosage: "40-80 mg PO once daily", category: "Statin", isOrphan: false },
      { name: "Metoprolol", dosage: "25-100 mg PO twice daily", category: "Beta-Blocker", isOrphan: false },
      { name: "Isosorbide mononitrate", dosage: "30-60 mg PO once daily", category: "Nitrate", isOrphan: false }
    ],
    clinicalNote: "Dual antiplatelet after PCI. Cardiac rehab recommended."
  },

  "cad": {
    drugs: [
      { name: "Aspirin", dosage: "75-100 mg PO once daily", category: "Antiplatelet", isOrphan: false },
      { name: "Atorvastatin", dosage: "40-80 mg PO once daily", category: "Statin", isOrphan: false },
      { name: "Metoprolol", dosage: "25-100 mg PO twice daily", category: "Beta-Blocker", isOrphan: false }
    ],
    clinicalNote: "Cardiac rehab recommended. Lifestyle modification essential."
  },

  "anemia": {
    drugs: [
      { name: "Ferrous sulfate", dosage: "325 mg PO twice daily", category: "Iron Supplement", isOrphan: false },
      { name: "Folic acid", dosage: "5 mg PO once daily", category: "Vitamin B9 Supplement", isOrphan: false },
      { name: "Cyanocobalamin (B12)", dosage: "1000 mcg IM monthly", category: "Vitamin B12 Supplement", isOrphan: false }
    ],
    clinicalNote: "Identify underlying cause. Iron with Vitamin C for better absorption."
  },

  "iron deficiency anemia": {
    drugs: [
      { name: "Ferrous sulfate", dosage: "325 mg PO twice daily", category: "Iron Supplement", isOrphan: false },
      { name: "Ferric carboxymaltose", dosage: "500-1000 mg IV single dose", category: "IV Iron", isOrphan: false }
    ],
    clinicalNote: "Treat underlying cause. Recheck hemoglobin after 4 weeks."
  },

  "depression": {
    drugs: [
      { name: "Sertraline", dosage: "50-200 mg PO once daily", category: "SSRI", isOrphan: false },
      { name: "Escitalopram", dosage: "10-20 mg PO once daily", category: "SSRI", isOrphan: false },
      { name: "Venlafaxine", dosage: "75-225 mg PO once daily", category: "SNRI", isOrphan: false },
      { name: "Mirtazapine", dosage: "15-45 mg PO at bedtime", category: "NaSSA", isOrphan: false }
    ],
    clinicalNote: "Allow 4-6 weeks for full effect. Combine with psychotherapy for best outcomes."
  },

  "major depressive disorder": {
    drugs: [
      { name: "Sertraline", dosage: "50-200 mg PO once daily", category: "SSRI", isOrphan: false },
      { name: "Escitalopram", dosage: "10-20 mg PO once daily", category: "SSRI", isOrphan: false }
    ],
    clinicalNote: "Monitor for suicidal ideation. Psychotherapy recommended alongside medication."
  },

  "anxiety disorder": {
    drugs: [
      { name: "Sertraline", dosage: "50-200 mg PO once daily", category: "SSRI", isOrphan: false },
      { name: "Buspirone", dosage: "7.5-15 mg PO twice daily", category: "Anxiolytic", isOrphan: false },
      { name: "Clonazepam", dosage: "0.25-0.5 mg PO twice daily short-term", category: "Benzodiazepine", isOrphan: false }
    ],
    clinicalNote: "CBT is first-line. Benzodiazepines only for short-term use."
  },

  "generalized anxiety disorder": {
    drugs: [
      { name: "Sertraline", dosage: "50-200 mg PO once daily", category: "SSRI", isOrphan: false },
      { name: "Venlafaxine", dosage: "75-225 mg PO once daily", category: "SNRI", isOrphan: false },
      { name: "Buspirone", dosage: "7.5-15 mg PO twice daily", category: "Anxiolytic", isOrphan: false }
    ],
    clinicalNote: "CBT is first-line. Avoid benzodiazepines long-term."
  },

  "epilepsy": {
    drugs: [
      { name: "Levetiracetam", dosage: "500-1500 mg PO twice daily", category: "Antiepileptic", isOrphan: false },
      { name: "Valproic acid", dosage: "500-1500 mg PO twice daily", category: "Antiepileptic", isOrphan: false },
      { name: "Carbamazepine", dosage: "200-400 mg PO twice daily", category: "Antiepileptic", isOrphan: false },
      { name: "Lamotrigine", dosage: "25-200 mg PO twice daily", category: "Antiepileptic", isOrphan: false }
    ],
    clinicalNote: "Seizure type guides drug choice. Avoid valproate in women of childbearing age."
  },

  "seizure disorder": {
    drugs: [
      { name: "Levetiracetam", dosage: "500-1500 mg PO twice daily", category: "Antiepileptic", isOrphan: false },
      { name: "Carbamazepine", dosage: "200-400 mg PO twice daily", category: "Antiepileptic", isOrphan: false }
    ],
    clinicalNote: "Seizure type guides drug choice. Avoid driving until seizure-free 1 year."
  },

  "rheumatoid arthritis": {
    drugs: [
      { name: "Methotrexate", dosage: "7.5-25 mg PO/SC weekly", category: "DMARD", isOrphan: false },
      { name: "Hydroxychloroquine", dosage: "200-400 mg PO once daily", category: "Antimalarial DMARD", isOrphan: false },
      { name: "Leflunomide", dosage: "20 mg PO once daily", category: "DMARD", isOrphan: false },
      { name: "Prednisolone", dosage: "5-10 mg PO once daily bridging", category: "Corticosteroid", isOrphan: false }
    ],
    clinicalNote: "Methotrexate is anchor therapy. Folate supplementation mandatory with MTX."
  },

  "ra": {
    drugs: [
      { name: "Methotrexate", dosage: "7.5-25 mg PO/SC weekly", category: "DMARD", isOrphan: false },
      { name: "Hydroxychloroquine", dosage: "200-400 mg PO once daily", category: "Antimalarial DMARD", isOrphan: false }
    ],
    clinicalNote: "Folate supplementation mandatory with Methotrexate."
  },

  "osteoporosis": {
    drugs: [
      { name: "Alendronate", dosage: "70 mg PO weekly morning fasting", category: "Bisphosphonate", isOrphan: false },
      { name: "Calcium carbonate", dosage: "1000-1200 mg PO daily divided", category: "Calcium Supplement", isOrphan: false },
      { name: "Cholecalciferol (Vit D3)", dosage: "1000-2000 IU PO daily", category: "Vitamin D Supplement", isOrphan: false },
      { name: "Denosumab", dosage: "60 mg SC every 6 months", category: "RANK-L Inhibitor", isOrphan: false }
    ],
    clinicalNote: "DXA scan for monitoring. Calcium + Vitamin D with all anti-osteoporotic drugs."
  },

  "copd": {
    drugs: [
      { name: "Tiotropium", dosage: "18 mcg inhaled once daily", category: "LAMA - Long-Acting Anticholinergic", isOrphan: false },
      { name: "Salbutamol", dosage: "100-200 mcg inhaled PRN", category: "SABA - Rescue Inhaler", isOrphan: false },
      { name: "Formoterol/Budesonide", dosage: "4.5/160 mcg inhaled twice daily", category: "LABA/ICS Combination", isOrphan: false }
    ],
    clinicalNote: "Smoking cessation is most important intervention. Annual influenza vaccination."
  },

  "chronic obstructive pulmonary disease": {
    drugs: [
      { name: "Tiotropium", dosage: "18 mcg inhaled once daily", category: "LAMA", isOrphan: false },
      { name: "Salbutamol", dosage: "100-200 mcg inhaled PRN", category: "SABA", isOrphan: false },
      { name: "Prednisolone", dosage: "30-40 mg PO daily x5 days exacerbation", category: "Oral Corticosteroid", isOrphan: false }
    ],
    clinicalNote: "Smoking cessation essential. Pulmonary rehab recommended."
  },

  "urinary tract infection": {
    drugs: [
      { name: "Nitrofurantoin", dosage: "100 mg PO twice daily x5 days", category: "Urinary Antibiotic", isOrphan: false },
      { name: "Trimethoprim", dosage: "200 mg PO twice daily x7 days", category: "Antibiotic", isOrphan: false },
      { name: "Ciprofloxacin", dosage: "500 mg PO twice daily x3-7 days", category: "Fluoroquinolone", isOrphan: false }
    ],
    clinicalNote: "Urine culture before antibiotics. Increase fluid intake."
  },

  "uti": {
    drugs: [
      { name: "Nitrofurantoin", dosage: "100 mg PO twice daily x5 days", category: "Urinary Antibiotic", isOrphan: false },
      { name: "Trimethoprim", dosage: "200 mg PO twice daily x7 days", category: "Antibiotic", isOrphan: false }
    ],
    clinicalNote: "Urine culture before antibiotics. Increase fluid intake."
  },

  "hyperlipidemia": {
    drugs: [
      { name: "Atorvastatin", dosage: "10-80 mg PO once daily", category: "Statin", isOrphan: false },
      { name: "Rosuvastatin", dosage: "5-40 mg PO once daily", category: "Statin", isOrphan: false },
      { name: "Ezetimibe", dosage: "10 mg PO once daily", category: "Cholesterol Absorption Inhibitor", isOrphan: false },
      { name: "Fenofibrate", dosage: "145 mg PO once daily", category: "Fibrate for triglycerides", isOrphan: false }
    ],
    clinicalNote: "Target LDL based on cardiovascular risk. Dietary modification essential."
  },

  "dyslipidemia": {
    drugs: [
      { name: "Atorvastatin", dosage: "10-80 mg PO once daily", category: "Statin", isOrphan: false },
      { name: "Ezetimibe", dosage: "10 mg PO once daily", category: "Cholesterol Absorption Inhibitor", isOrphan: false }
    ],
    clinicalNote: "Target LDL <70 mg/dL for high-risk patients."
  },

  "atrial fibrillation": {
    drugs: [
      { name: "Apixaban", dosage: "5 mg PO twice daily", category: "Direct Oral Anticoagulant", isOrphan: false },
      { name: "Metoprolol", dosage: "25-100 mg PO twice daily", category: "Beta-Blocker rate control", isOrphan: false },
      { name: "Digoxin", dosage: "0.125-0.25 mg PO once daily", category: "Cardiac Glycoside", isOrphan: false },
      { name: "Amiodarone", dosage: "200 mg PO once daily rhythm control", category: "Antiarrhythmic", isOrphan: false }
    ],
    clinicalNote: "CHA2DS2-VASc score guides anticoagulation. Rate control target HR <80 bpm."
  },

  "liver cirrhosis": {
    drugs: [
      { name: "Propranolol", dosage: "20-40 mg PO twice daily varices prophylaxis", category: "Beta-Blocker", isOrphan: false },
      { name: "Spironolactone", dosage: "100-400 mg PO once daily ascites", category: "Diuretic", isOrphan: false },
      { name: "Furosemide", dosage: "40-160 mg PO once daily ascites", category: "Loop Diuretic", isOrphan: false },
      { name: "Lactulose", dosage: "15-30 mL PO 2-4 times daily encephalopathy", category: "Osmotic Laxative", isOrphan: false }
    ],
    clinicalNote: "Monitor for varices, ascites, and encephalopathy. Avoid hepatotoxic drugs."
  },

  "hepatitis b": {
    drugs: [
      { name: "Tenofovir disoproxil", dosage: "300 mg PO once daily", category: "Nucleotide Analog", isOrphan: false },
      { name: "Entecavir", dosage: "0.5 mg PO once daily", category: "Nucleoside Analog", isOrphan: false },
      { name: "Pegylated Interferon alfa-2a", dosage: "180 mcg SC weekly x48 weeks", category: "Immunomodulator", isOrphan: false }
    ],
    clinicalNote: "Monitor HBV DNA every 3 months. Treat if HBV DNA >2000 IU/mL."
  },

  "hepatitis c": {
    drugs: [
      { name: "Sofosbuvir/Velpatasvir", dosage: "400/100 mg PO once daily x12 weeks", category: "NS5A/NS5B Inhibitor Combo", isOrphan: false },
      { name: "Glecaprevir/Pibrentasvir", dosage: "300/120 mg PO once daily x8-12 weeks", category: "Pan-Genotypic DAA", isOrphan: false }
    ],
    clinicalNote: "SVR12 = cure. Recheck liver function post-treatment."
  },

  "dengue fever": {
    drugs: [
      { name: "Paracetamol", dosage: "500-1000 mg PO every 6 hours", category: "Antipyretic", isOrphan: false },
      { name: "Oral rehydration salts", dosage: "As needed for hydration", category: "Supportive Fluid Replacement", isOrphan: false }
    ],
    clinicalNote: "Avoid NSAIDs and aspirin due to bleeding risk. Monitor platelet count daily."
  },

  "malaria": {
    drugs: [
      { name: "Artemether/Lumefantrine", dosage: "80/480 mg PO twice daily x3 days", category: "Artemisinin Combination", isOrphan: false },
      { name: "Chloroquine", dosage: "600 mg PO loading then 300 mg at 6 24 48hrs", category: "Aminoquinoline for P.vivax", isOrphan: false },
      { name: "Primaquine", dosage: "15 mg PO once daily x14 days radical cure", category: "Antirelapse for P.vivax", isOrphan: false }
    ],
    clinicalNote: "Test G6PD before Primaquine. Species-specific treatment important."
  },

  "typhoid fever": {
    drugs: [
      { name: "Ceftriaxone", dosage: "2 g IV once daily x10-14 days", category: "Cephalosporin Antibiotic", isOrphan: false },
      { name: "Azithromycin", dosage: "500 mg PO once daily x7 days", category: "Macrolide Antibiotic", isOrphan: false },
      { name: "Ciprofloxacin", dosage: "500 mg PO twice daily x10 days", category: "Fluoroquinolone", isOrphan: false }
    ],
    clinicalNote: "Blood culture for confirmation. Monitor for intestinal perforation."
  },

  "typhoid": {
    drugs: [
      { name: "Ceftriaxone", dosage: "2 g IV once daily x10-14 days", category: "Cephalosporin Antibiotic", isOrphan: false },
      { name: "Azithromycin", dosage: "500 mg PO once daily x7 days", category: "Macrolide Antibiotic", isOrphan: false }
    ],
    clinicalNote: "Blood culture for confirmation. Monitor for intestinal perforation."
  },

  "psoriasis": {
    drugs: [
      { name: "Methotrexate", dosage: "7.5-25 mg PO/SC weekly", category: "Systemic DMARD", isOrphan: false },
      { name: "Acitretin", dosage: "25-50 mg PO once daily", category: "Oral Retinoid", isOrphan: false },
      { name: "Clobetasol propionate", dosage: "Apply thinly twice daily topical", category: "Potent Topical Corticosteroid", isOrphan: false }
    ],
    clinicalNote: "Topical first-line for mild-moderate. Biologic agents for severe/refractory cases."
  },

  "eczema": {
    drugs: [
      { name: "Hydrocortisone", dosage: "1% cream apply twice daily", category: "Mild Topical Corticosteroid", isOrphan: false },
      { name: "Betamethasone", dosage: "0.1% cream apply once daily", category: "Moderate Topical Corticosteroid", isOrphan: false },
      { name: "Tacrolimus", dosage: "0.1% ointment apply twice daily", category: "Topical Calcineurin Inhibitor", isOrphan: false },
      { name: "Cetirizine", dosage: "10 mg PO once daily", category: "Antihistamine for itch relief", isOrphan: false }
    ],
    clinicalNote: "Moisturize regularly. Identify and avoid triggers."
  },

  "atopic dermatitis": {
    drugs: [
      { name: "Hydrocortisone", dosage: "1% cream apply twice daily", category: "Mild Topical Corticosteroid", isOrphan: false },
      { name: "Tacrolimus", dosage: "0.1% ointment apply twice daily", category: "Topical Calcineurin Inhibitor", isOrphan: false }
    ],
    clinicalNote: "Regular emollient use essential. Avoid known triggers."
  },

  "gout": {
    drugs: [
      { name: "Colchicine", dosage: "0.5 mg PO twice daily acute attack", category: "Anti-inflammatory", isOrphan: false },
      { name: "Allopurinol", dosage: "100-300 mg PO once daily prophylaxis", category: "Xanthine Oxidase Inhibitor", isOrphan: false },
      { name: "Indomethacin", dosage: "50 mg PO three times daily acute", category: "NSAID", isOrphan: false },
      { name: "Febuxostat", dosage: "40-80 mg PO once daily", category: "Xanthine Oxidase Inhibitor", isOrphan: false }
    ],
    clinicalNote: "Target uric acid <6 mg/dL. Low purine diet. Avoid alcohol."
  },

  "irritable bowel syndrome": {
    drugs: [
      { name: "Mebeverine", dosage: "135 mg PO three times daily before meals", category: "Antispasmodic", isOrphan: false },
      { name: "Loperamide", dosage: "2-4 mg PO after loose stools IBS-D", category: "Antidiarrheal", isOrphan: false },
      { name: "Ispaghula husk", dosage: "One sachet PO twice daily in water", category: "Bulk-forming Laxative IBS-C", isOrphan: false }
    ],
    clinicalNote: "Low FODMAP diet effective. Stress management important."
  },

  "ibs": {
    drugs: [
      { name: "Mebeverine", dosage: "135 mg PO three times daily before meals", category: "Antispasmodic", isOrphan: false },
      { name: "Loperamide", dosage: "2-4 mg PO after loose stools", category: "Antidiarrheal", isOrphan: false }
    ],
    clinicalNote: "Low FODMAP diet recommended. Stress management important."
  },

  "chronic pain": {
    drugs: [
      { name: "Paracetamol", dosage: "500-1000 mg PO every 6-8 hours", category: "Analgesic", isOrphan: false },
      { name: "Ibuprofen", dosage: "400-600 mg PO three times daily with food", category: "NSAID", isOrphan: false },
      { name: "Pregabalin", dosage: "75-300 mg PO twice daily", category: "Neuropathic Pain Agent", isOrphan: false },
      { name: "Tramadol", dosage: "50-100 mg PO every 4-6 hours PRN", category: "Opioid Analgesic", isOrphan: false }
    ],
    clinicalNote: "Stepwise analgesic approach. Avoid long-term opioids without reassessment."
  },

  "insomnia": {
    drugs: [
      { name: "Melatonin", dosage: "0.5-5 mg PO 1 hour before bedtime", category: "Sleep Hormone", isOrphan: false },
      { name: "Zolpidem", dosage: "5-10 mg PO at bedtime short-term", category: "Non-Benzodiazepine Hypnotic", isOrphan: false },
      { name: "Trazodone", dosage: "50-100 mg PO at bedtime", category: "Sedating Antidepressant", isOrphan: false }
    ],
    clinicalNote: "CBT-I is first-line. Limit hypnotics to short-term use."
  },

  "vitamin d deficiency": {
    drugs: [
      { name: "Cholecalciferol (Vit D3)", dosage: "60000 IU PO weekly x8 weeks", category: "Vitamin D Supplement", isOrphan: false },
      { name: "Calcium carbonate", dosage: "500 mg PO twice daily", category: "Calcium Supplement", isOrphan: false }
    ],
    clinicalNote: "Recheck Vitamin D levels after 3 months of supplementation."
  },

  "obesity": {
    drugs: [
      { name: "Orlistat", dosage: "120 mg PO three times daily with meals", category: "Lipase Inhibitor", isOrphan: false },
      { name: "Semaglutide", dosage: "0.25 mg SC weekly titrate to 2.4 mg", category: "GLP-1 Receptor Agonist", isOrphan: false }
    ],
    clinicalNote: "Diet and exercise are cornerstone. BMI >30 qualifies for pharmacotherapy."
  },

  "sinusitis": {
    drugs: [
      { name: "Amoxicillin-Clavulanate", dosage: "875/125 mg PO twice daily x10 days", category: "Beta-Lactam Antibiotic", isOrphan: false },
      { name: "Fluticasone nasal spray", dosage: "2 sprays each nostril once daily", category: "Intranasal Corticosteroid", isOrphan: false },
      { name: "Xylometazoline", dosage: "2-3 drops each nostril 3 times daily max 3 days", category: "Nasal Decongestant", isOrphan: false }
    ],
    clinicalNote: "Viral sinusitis: antibiotics not needed. Bacterial: antibiotics if >10 days."
  },

  "tonsillitis": {
    drugs: [
      { name: "Amoxicillin", dosage: "500 mg PO three times daily x10 days", category: "Penicillin Antibiotic", isOrphan: false },
      { name: "Azithromycin", dosage: "500 mg PO day 1 then 250 mg x4 days", category: "Macrolide Antibiotic", isOrphan: false },
      { name: "Paracetamol", dosage: "500-1000 mg PO every 6 hours PRN", category: "Antipyretic Analgesic", isOrphan: false }
    ],
    clinicalNote: "Throat swab before antibiotics. Tonsillectomy if recurrent 5+ times per year."
  },

  "otitis media": {
    drugs: [
      { name: "Amoxicillin", dosage: "500 mg PO three times daily x5-7 days", category: "Penicillin Antibiotic", isOrphan: false },
      { name: "Paracetamol", dosage: "500-1000 mg PO every 6 hours PRN", category: "Analgesic Antipyretic", isOrphan: false }
    ],
    clinicalNote: "Most cases resolve without antibiotics in 2-3 days. Treat if severe or <2 years old."
  },

  "conjunctivitis": {
    drugs: [
      { name: "Ciprofloxacin eye drops", dosage: "1-2 drops affected eye 4 times daily x7 days", category: "Topical Antibiotic", isOrphan: false },
      { name: "Chloramphenicol eye drops", dosage: "1 drop every 2 hours then every 6 hours", category: "Topical Antibiotic", isOrphan: false }
    ],
    clinicalNote: "Viral conjunctivitis: self-limiting. Bacterial: topical antibiotics. Avoid contact lenses."
  },

  "scabies": {
    drugs: [
      { name: "Permethrin 5% cream", dosage: "Apply from neck down leave 8-12 hrs then wash", category: "Topical Scabicide", isOrphan: false },
      { name: "Ivermectin", dosage: "200 mcg/kg PO single dose repeat in 2 weeks", category: "Oral Antiparasitic", isOrphan: false }
    ],
    clinicalNote: "Treat all household contacts simultaneously. Wash all clothing and bedding."
  },

  "fungal infection": {
    drugs: [
      { name: "Fluconazole", dosage: "150 mg PO single dose (systemic)", category: "Azole Antifungal", isOrphan: false },
      { name: "Clotrimazole cream", dosage: "Apply twice daily x2-4 weeks (topical)", category: "Topical Azole Antifungal", isOrphan: false },
      { name: "Terbinafine", dosage: "250 mg PO once daily x2-6 weeks", category: "Allylamine Antifungal", isOrphan: false }
    ],
    clinicalNote: "Identify fungal species. Keep affected area dry. Complete full course."
  },

  "back pain": {
    drugs: [
      { name: "Ibuprofen", dosage: "400-600 mg PO three times daily with food", category: "NSAID", isOrphan: false },
      { name: "Diclofenac", dosage: "50 mg PO three times daily", category: "NSAID", isOrphan: false },
      { name: "Cyclobenzaprine", dosage: "5-10 mg PO three times daily", category: "Muscle Relaxant", isOrphan: false },
      { name: "Paracetamol", dosage: "500-1000 mg PO every 6-8 hours", category: "Analgesic", isOrphan: false }
    ],
    clinicalNote: "Physiotherapy is key. Bed rest not recommended. MRI if red flags present."
  }

};

const knownInteractions = [
  { drug1: "warfarin", drug2: "aspirin", warning: "Bleeding risk - combined anticoagulation increases hemorrhage risk significantly." },
  { drug1: "metformin", drug2: "alcohol", warning: "Lactic acidosis risk - avoid alcohol consumption with Metformin." },
  { drug1: "ace inhibitor", drug2: "potassium", warning: "Hyperkalemia risk - ACE inhibitors reduce potassium excretion." },
  { drug1: "maoi", drug2: "ssri", warning: "Serotonin syndrome risk - potentially fatal combination." },
  { drug1: "penicillamine", drug2: "iron", warning: "Absorption reduced - separate administration by at least 2 hours." },
  { drug1: "methotrexate", drug2: "nsaid", warning: "Increased methotrexate toxicity - NSAIDs reduce renal clearance." },
  { drug1: "digoxin", drug2: "amiodarone", warning: "Digoxin toxicity risk - amiodarone increases digoxin levels significantly." },
  { drug1: "clopidogrel", drug2: "omeprazole", warning: "Reduced antiplatelet effect - omeprazole inhibits clopidogrel activation." },
  { drug1: "levothyroxine", drug2: "calcium", warning: "Reduced absorption - separate levothyroxine and calcium by 4 hours." },
  { drug1: "ciprofloxacin", drug2: "antacid", warning: "Reduced ciprofloxacin absorption - separate by 2 hours." }
];

module.exports = { drugDatabase, knownInteractions };
