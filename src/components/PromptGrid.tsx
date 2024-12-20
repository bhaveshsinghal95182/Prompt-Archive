import React from 'react';
import { PromptRow } from './PromptRow';
import { modelPrompts } from '../data/prompts/index';

interface PromptGridProps {
  activeModel: string;
}

export function PromptGrid({ activeModel }: PromptGridProps) {
  const prompts = modelPrompts[activeModel as keyof typeof modelPrompts];
  
  // Split prompts into two rows
  const midPoint = Math.ceil(prompts.length / 2);
  const topRowPrompts = prompts.slice(0, midPoint);
  const bottomRowPrompts = prompts.slice(midPoint);

  return (
    <div className="space-y-6">
      <PromptRow prompts={topRowPrompts} />
      <PromptRow prompts={bottomRowPrompts} />
    </div>
  );
}