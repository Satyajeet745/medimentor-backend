const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");

require("dotenv").config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: "You are MediMentor, a clinical AI assistant for qualified doctors only. Answer drug queries, clinical guidelines, and interaction questions accurately and concisely in 2-4 sentences. Always end with: Final clinical judgment belongs to the treating physician." },
        { role: "user", content: message }
      ],
      temperature: 0.3,
      max_tokens: 400
    });
    const reply = completion.choices[0]?.message?.content || "Unable to process request.";
    res.json({ reply });
  } catch (err) {
    console.error("Groq chat error:", err.message);
    res.json({ reply: "AI assistant temporarily unavailable. Please refer to clinical guidelines or consult a specialist.", fallback: true });
  }
});

module.exports = router;
