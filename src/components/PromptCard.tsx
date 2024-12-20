import React from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface PromptCardProps {
  prompt: {
    text: string;
    category: string;
  };
  className?: string;
}

export function PromptCard({ prompt, className = '' }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`
      relative group bg-white rounded-3xl p-6
      border-2 border-violet-100
      transition-all duration-300
      hover:shadow-xl hover:-translate-y-1
      ${className}
    `}>
      <button
        onClick={copyToClipboard}
        className="absolute top-4 right-4 p-2 rounded-full
          bg-violet-50 text-violet-600
          transition-all duration-300
          hover:bg-violet-100"
      >
        {copied ? (
          <CheckCircle className="w-5 h-5 text-green-500" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>
      
      <span className="inline-block px-3 py-1 mb-4 text-xs font-medium
        text-violet-600 bg-violet-50 rounded-full">
        {prompt.category}
      </span>
      
      <p className="text-gray-700 font-medium leading-relaxed">
        {prompt.text}
      </p>
      
      {copied && (
        <div className="absolute -top-12 right-4 px-3 py-1
          bg-green-500 text-white text-sm rounded-lg
          animate-fade-in-down">
          Copied!
        </div>
      )}
    </div>
  );
}