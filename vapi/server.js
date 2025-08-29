// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY  // Or pass directly
});

app.post("/generate-interview", async (req, res) => {
  const { resumeText } = req.body;

  if (!resumeText) {
    return res.status(400).json({ error: "Resume text is required" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Generate 5 clear and concise **technical interview questions only** (no answers, no explanations, no career advice) based on this resume:\n\n${resumeText}`
                }
              ]
            }
          ]
        }),
      }
    );

    const data = await response.json();

    // Extract the actual response text
    const questionsText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Split into individual questions
    const questions = questionsText
      .split(/\n+/)
      .filter((q) => q.trim() !== "")
      .map((q) => q.replace(/^\d+\.\s*/, "")); // remove numbering if present

    res.json({ questions });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).json({ error: "Failed to generate interview questions" });
  }
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`VAPI (Gemini) server running on port ${PORT}`));
