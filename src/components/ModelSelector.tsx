import React from 'react';
import { Brain, Stars, Sparkles, Bot } from 'lucide-react';

const models = [
  { name: 'ChatGPT', icon: Brain },
  { name: 'Gemini', icon: Stars },
  { name: 'Claude', icon: Sparkles },
  { name: 'Llama', icon: Bot },
];

export function ModelSelector({ activeModel, onModelSelect }: { 
  activeModel: string;
  onModelSelect: (model: string) => void;
}) {
  return (
    <div className="flex justify-center gap-4 p-6 overflow-x-auto">
      {models.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => onModelSelect(name)}
          className={`
            flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium
            transition-all duration-300 transform hover:scale-105
            ${activeModel === name 
              ? 'bg-violet-500 text-white shadow-lg' 
              : 'bg-white text-violet-600 hover:bg-violet-50'
            }
          `}
        >
          <Icon className="w-4 h-4" />
          {name}
        </button>
      ))}
    </div>
  );
}