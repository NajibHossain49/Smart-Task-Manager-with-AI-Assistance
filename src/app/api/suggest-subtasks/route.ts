import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { taskTitle } = await req.json();
    if (!taskTitle) {
      return NextResponse.json({ error: 'Task title is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `Given the task "${taskTitle}", suggest 3-5 actionable subtasks to break it down. Return only a raw JSON array of strings, e.g., ["Subtask 1", "Subtask 2", "Subtask 3"]. Do not include Markdown, code fences, or any other formatting.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = await response.text();

    // Clean the response to remove Markdown code fences and whitespace
    text = text.replace(/```json\n|\n```/g, '').trim();

    // Parse the cleaned response
    let subtasks: string[];
    try {
      subtasks = JSON.parse(text);
      if (!Array.isArray(subtasks) || subtasks.some((s) => typeof s !== 'string')) {
        throw new Error('Invalid subtask format');
      }
    } catch (parseError) {
      console.error('Error parsing Gemini response:', parseError, 'Raw text:', text);
      return NextResponse.json({ error: 'Failed to parse subtasks' }, { status: 500 });
    }

    return NextResponse.json({ subtasks });
  } catch (error) {
    console.error('Error generating subtasks:', error);
    return NextResponse.json({ error: 'Failed to generate subtasks' }, { status: 500 });
  }
}