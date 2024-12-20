import { chatgptPrompts } from './models/chatgpt';
import { geminiPrompts } from './models/gemini';
import { claudePrompts } from './models/claude';
import { llamaPrompts } from './models/llama';

export const modelPrompts = {
  ChatGPT: chatgptPrompts,
  Gemini: geminiPrompts,
  Claude: claudePrompts,
  Llama: llamaPrompts,
} as const;