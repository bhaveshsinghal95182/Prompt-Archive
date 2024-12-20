import { useState } from "react";
import { Copy, CheckCircle } from "lucide-react";
import { Prompt } from "../types";

interface CustomPromptCardProps {
  prompt: Prompt;
}

export function CustomPromptCard({ prompt }: CustomPromptCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative p-4 rounded-lg bg-violet-50 group">
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 rounded-full
          bg-violet-100 text-violet-600
          transition-all duration-300
          hover:bg-violet-200"
      >
        {copied ? (
          <CheckCircle className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>

      <div className="text-sm font-medium text-violet-600 mb-1">
        {prompt.category}
      </div>
      <div className="text-gray-700 pr-12">{prompt.text}</div>

      {copied && (
        <div
          className="absolute -top-8 right-3 px-3 py-1
          bg-green-500 text-white text-sm rounded-lg
          animate-fade-in-down"
        >
          Copied!
        </div>
      )}
    </div>
  );
}
