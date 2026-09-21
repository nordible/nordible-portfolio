import { knowledgeBase } from '../data/knowledgeBase';

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
const GEMINI_MODEL = 'gemini-2.0-flash-exp';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

function searchKnowledgeBase(query: string): string {
  const lowerQuery = query.toLowerCase();
  let context = '';
  
  // Search in experience
  if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
    context += `Experience: ${JSON.stringify(knowledgeBase.experience, null, 2)}\n\n`;
  }
  
  // Search in projects
  if (lowerQuery.includes('project') || lowerQuery.includes('built') || lowerQuery.includes('developed')) {
    context += `Projects: ${JSON.stringify(knowledgeBase.projects, null, 2)}\n\n`;
  }
  
  // Search in skills
  if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech')) {
    context += `Skills: ${JSON.stringify(knowledgeBase.skills, null, 2)}\n\n`;
  }
  
  // Search in services
  if (lowerQuery.includes('service') || lowerQuery.includes('offer') || lowerQuery.includes('do')) {
    context += `Services: ${JSON.stringify(knowledgeBase.services, null, 2)}\n\n`;
  }
  
  // Search in founder
  if (lowerQuery.includes('founder') || lowerQuery.includes('kabeer') || lowerQuery.includes('leader') || lowerQuery.includes('story') || lowerQuery.includes('who') || lowerQuery.includes('experience')) {
    context += `Founder Info: ${JSON.stringify(knowledgeBase.founder, null, 2)}\n\n`;
  }

  // Always include personal & company info
  context += `Company Info: ${JSON.stringify(knowledgeBase.personal, null, 2)}\n\n`;
  
  return context || JSON.stringify(knowledgeBase, null, 2);
}

export async function askAI(question: string, chatHistory: ChatMessage[] = []): Promise<{ answer: string; canAnswer: boolean }> {
  try {
    if (!GEMINI_API_KEY) {
      return { 
        answer: "AI service is not configured. Please contact me directly.", 
        canAnswer: false 
      };
    }

    const context = searchKnowledgeBase(question);
    
    const systemPrompt = `You are Nordible Solutions's AI assistant on his portfolio website. Answer questions about Nordible's experience, skills, projects, and services based ONLY on the provided context. 

Rules:
1. Be conversational and friendly
2. If you can answer from the context, respond naturally
3. If the question is outside your knowledge, say "I'd recommend contacting Nordible directly for that. Let me show you the contact form."
4. Keep responses concise but informative
5. Don't make up information not in the context

Context about Nordible Solutions:
${context}`;

    const messages = [
      { role: 'user', parts: [{ text: systemPrompt }] },
      ...chatHistory.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      { role: 'user', parts: [{ text: question }] }
    ];

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      throw new Error(`API request failed: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that question.";
    
    const lowerAnswer = answer.toLowerCase();
    const canAnswer = !lowerAnswer.includes("contact Nordible directly") && 
                     !lowerAnswer.includes("recommend contacting Nordible") &&
                     !lowerAnswer.includes("reach Nordible at") &&
                     !lowerAnswer.includes("contact form") &&
                     !lowerAnswer.includes("let me show you");
    
    return { answer, canAnswer };
    
  } catch (error) {
    console.error('AI service error:', error);
    return { 
      answer: "I'm having trouble right now. Please contact Nordible directly.", 
      canAnswer: false 
    };
  }
}