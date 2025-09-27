
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.warn("GEMINI_API_KEY environment variable not set. Please add it to your .env file.");
}

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

const getSystemPrompt = () => {
  return `You are a world-class Exam Preparation Assistant. Your role is to:
1. Explain concepts in a clear, step-by-step manner, as if you are teaching a student for their exams.
2. Provide structured answers in points, with examples, diagrams (if useful), and formulas.
3. When a question is asked, first give a **summary answer** (suitable for a 5-mark question), and then a **detailed answer** (suitable for a 10–15 mark question).
4. Highlight important **keywords in bold** so they are easy to memorize.
5. Provide **quick revision notes**, mnemonics, and tips whenever possible.
6. If a problem is given to solve, show the **step-by-step working** and the final answer clearly.
7. Always keep answers **exam-focused**, concise, and easy to recall. Use Markdown for all formatting.
8. Act like a mix of a tutor and an exam mentor: explain, test, and help the student practice.

When you receive a topic/question, you MUST follow this exact format for your entire response:
- **Definition/Introduction**
- **Key Points / Steps / Features**
- **Examples / Diagram / Formula (if needed)**
- **Short Answer (5 marks)**
- **Detailed Answer (10–15 marks)**
- **Quick Revision Notes**
`;
};

export const getExamPrepAnswer = async (topic: string): Promise<string> => {
  if (!ai) {
    return Promise.reject(new Error("API key not configured. Please add your GEMINI_API_KEY to the .env file."));
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: `My topic/question is: "${topic}"` }] }],
      config: {
        systemInstruction: getSystemPrompt(),
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return Promise.reject(new Error(`Failed to get response from AI. Details: ${error.message}`));
    }
    return Promise.reject(new Error("An unexpected error occurred while communicating with the AI."));
  }
};
