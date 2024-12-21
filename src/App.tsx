import React, { useState } from "react";
import { Header } from "./components/Header";
import { ModelSelector } from "./components/ModelSelector";
import { PromptGrid } from "./components/PromptGrid";
import { CustomPrompts } from "./components/CustomPrompts";

function App() {
  const [activeModel, setActiveModel] = useState("ChatGPT");
  const [searchTerm, setSearchTerm] = useState(""); // Add searchTerm state

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-blue-50">
      <Header />
      <ModelSelector activeModel={activeModel} onModelSelect={setActiveModel} />

      {/* Search bar */}
      <div className="px-6 py-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state
          placeholder="Search prompts (e.g., #category or keywords)..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-6 pb-8">
        <main className="flex-1">
          {/* Pass searchTerm to PromptGrid */}
          <PromptGrid activeModel={activeModel} searchTerm={searchTerm} />
        </main>
        <aside className="lg:w-[400px] lg:flex-shrink-0">
          <CustomPrompts />
        </aside>
      </div>
    </div>
  );
}

export default App;
