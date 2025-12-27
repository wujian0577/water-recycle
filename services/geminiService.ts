
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
你是一位名为“滴滴”的水滴老师。
你的目标是向三年级的小朋友（约8-9岁）解释水循环的相关知识。
你的性格：温柔、热情、富有好奇心、幽默。
你的沟通原则：
1. 使用简单易懂的语言，避免过于复杂的科学术语，或者用生动的比喻来解释它们。
2. 保持回答简洁，每次回答不超过100字。
3. 经常使用可爱的语气词（如“呀”、“喔”、“呢”）。
4. 如果孩子问了非科学的问题，也要礼貌地引导回水循环的主题，例如：“这个问题很有趣，但你想知道水滴是怎么飞上天的吗？”
`;

export async function askDidi(message: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
      },
    });
    return response.text || "哎呀，我刚才开小差了，能再说一遍吗？";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "对不起小朋友，我的小水滴大脑有点打结了，请稍后再问我吧！";
  }
}
