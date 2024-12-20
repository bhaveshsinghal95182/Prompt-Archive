import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="pt-8 pb-6 px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Sparkles className="w-8 h-8 text-violet-500" />
        <h1 className="text-3xl font-bold text-violet-900">
          Prompt Archive
        </h1>
      </div>
      <p className="text-violet-600 max-w-md mx-auto">
        Discover and copy amazing prompts for your favorite AI models
      </p>
    </header>
  );
}