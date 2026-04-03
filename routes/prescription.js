const express = require("express");
const router = express.Router();

// In-memory storage
const prescriptions = [];

router.post("/", (req, res) => {
  const { patient, disease, drugs, notes } = req.body;
  const prescription = {
    id: `MM-${Date.now()}`,
    timestamp: new Date().toISOString(),
    patient,
    disease,
    drugs,
    notes
  };
  prescriptions.push(prescription);
  res.json({ id: prescription.id, timestamp: prescription.timestamp });
});

router.get("/", (req, res) => {
  res.json({ prescriptions });
});

module.exports = router;
