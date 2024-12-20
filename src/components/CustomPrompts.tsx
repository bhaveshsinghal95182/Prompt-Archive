import React, { useState } from "react";
import { Download, Upload, Plus } from "lucide-react";
import { Prompt } from "../types";
import { CustomPromptCard } from "./CustomPromptCard";

export function CustomPrompts() {
  const [customPrompts, setCustomPrompts] = useState<Prompt[]>([]);
  const [newPrompt, setNewPrompt] = useState({ text: "", category: "" });

  const addPrompt = () => {
    if (newPrompt.text && newPrompt.category) {
      setCustomPrompts([...customPrompts, { ...newPrompt, width: "medium" }]);
      setNewPrompt({ text: "", category: "" });
    }
  };

  const exportPrompts = () => {
    const blob = new Blob([JSON.stringify(customPrompts, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-prompts.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importPrompts = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string);
          setCustomPrompts([...customPrompts, ...imported]);
        } catch (error) {
          console.error("Error importing prompts:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="lg:sticky lg:top-6 p-6 bg-white rounded-3xl shadow-sm border-2 border-violet-100">
      <h2 className="text-xl font-bold text-violet-900 mb-4">My Prompts</h2>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter your prompt"
            value={newPrompt.text}
            onChange={(e) =>
              setNewPrompt({ ...newPrompt, text: e.target.value })
            }
            className="w-full px-4 py-2 rounded-lg border-2 border-violet-100 focus:border-violet-300 focus:outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Category"
          value={newPrompt.category}
          onChange={(e) =>
            setNewPrompt({ ...newPrompt, category: e.target.value })
          }
          className="w-32 px-4 py-2 rounded-lg border-2 border-violet-100 focus:border-violet-300 focus:outline-none"
        />
        <button
          onClick={addPrompt}
          className="p-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-colors"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-3 mb-6 max-h-[60vh] overflow-y-auto hide-scrollbar">
        {customPrompts.map((prompt, index) => (
          <CustomPromptCard key={index} prompt={prompt} />
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={exportPrompts}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 text-violet-600 hover:bg-violet-200 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
        <label className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 text-violet-600 hover:bg-violet-200 transition-colors cursor-pointer">
          <Upload className="w-4 h-4" />
          Import
          <input
            type="file"
            accept=".json"
            onChange={importPrompts}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
