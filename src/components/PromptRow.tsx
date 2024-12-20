import React from 'react';
import { PromptCard } from './PromptCard';
import { Prompt } from '../types';
import { getCardWidth } from '../utils/getCardWidth';

interface PromptRowProps {
  prompts: Prompt[];
}

export function PromptRow({ prompts }: PromptRowProps) {
  return (
    <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 pb-6">
      {prompts.map((prompt, index) => (
        <div 
          key={index}
          className="snap-center shrink-0 first:pl-6 last:pr-6"
          style={{ width: getCardWidth(prompt.width) }}
        >
          <PromptCard prompt={prompt} />
        </div>
      ))}
    </div>
  );
}