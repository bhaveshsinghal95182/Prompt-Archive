import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="max-w-2xl mx-auto px-6 mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-400 w-5 h-5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search prompts by text or #category (e.g. creative, education)"
          className="w-full pl-12 pr-4 py-3 rounded-xl
            bg-white border-2 border-violet-100
            focus:border-violet-300 focus:outline-none
            placeholder:text-violet-300
            shadow-sm"
        />
      </div>
      <p className="text-sm text-violet-500 mt-2 ml-2">
        Tip: Use # to search by category (e.g. #creative)
      </p>
    </div>
  );
}
