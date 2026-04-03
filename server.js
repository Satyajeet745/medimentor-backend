require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/predict", require("./routes/predict"));
app.use("/api/drugs", require("./routes/drugs"));
app.use("/api/chat", require("./routes/chat"));
app.use("/api/prescription", require("./routes/prescription"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "MediMentor API is running", version: "2.0", ai: "Groq" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🏥 MediMentor backend running on port ${PORT}`);
  console.log(`🤖 AI Provider: Groq (llama-3.3-70b-versatile)`);
});
