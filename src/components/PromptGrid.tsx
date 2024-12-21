import React from "react";
import { PromptRow } from "./PromptRow";
import { modelPrompts } from "../data/prompts/index";
import { searchPrompts } from "../utils/searchPrompts";

interface PromptGridProps {
  activeModel: string;
  searchTerm: string;
}

export function PromptGrid({ activeModel, searchTerm }: PromptGridProps) {
  const allPrompts = modelPrompts[activeModel as keyof typeof modelPrompts];
  const filteredPrompts = searchPrompts(allPrompts, searchTerm);

  // Split prompts into two rows
  const midPoint = Math.ceil(filteredPrompts.length / 2);
  const topRowPrompts = filteredPrompts.slice(0, midPoint);
  const bottomRowPrompts = filteredPrompts.slice(midPoint);

  if (filteredPrompts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-violet-600">
          No prompts found matching your search.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PromptRow prompts={topRowPrompts} />
      <PromptRow prompts={bottomRowPrompts} />
    </div>
  );
}
