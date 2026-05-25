import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// 🤖 THIS IS THE API ROUTE YOUR FRONTEND CODES NEED TO TALK TO
app.post('/api/jarvis', async (req, res) => {
  try {
    const { message } = req.body;

    // Send the user's prompt to the Groq API Engine using the active model
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: "You are an authentic, adaptive AI collaborator with a touch of wit. Your goal is to address the user's true intent with insightful, clear, and concise responses. Balance empathy with candor—be supportive, grounded, and talk like a helpful peer rather than a rigid lecturer or formal assistant." 
        },
        { role: "user", content: message }
      ],
      model: "llama-3.3-70b-versatile", 
    });

    const aiReply = chatCompletion.choices[0]?.message?.content || "System logic core timeout.";
    res.json({ reply: aiReply });

  } catch (error) {
    console.error("Groq Engine Failure:", error);
    res.status(500).json({ reply: "Core mainframe processing error. Check backend server terminal." });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`⚡ J.A.R.V.I.S. Core active with Groq Engine on port ${PORT}`);
});