import { Prompt } from "../types";

export function searchPrompts(prompts: Prompt[], searchTerm: string): Prompt[] {
  if (!searchTerm.trim()) return prompts;

  const lowercaseSearch = searchTerm.toLowerCase();
  const isTagSearch = lowercaseSearch.startsWith("#");
  const searchValue = isTagSearch ? lowercaseSearch.slice(1) : lowercaseSearch;

  return prompts.filter((prompt) => {
    if (isTagSearch) {
      return prompt.category.toLowerCase().includes(searchValue);
    }

    return (
      prompt.text.toLowerCase().includes(searchValue) ||
      prompt.category.toLowerCase().includes(searchValue)
    );
  });
}
