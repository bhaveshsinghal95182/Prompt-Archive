import React, { useState } from "react";
import { Header } from "./components/Header";
import { ModelSelector } from "./components/ModelSelector";
import { PromptGrid } from "./components/PromptGrid";
import { CustomPrompts } from "./components/CustomPrompts";

function App() {
  const [activeModel, setActiveModel] = useState("ChatGPT");

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-blue-50">
      <Header />
      <ModelSelector activeModel={activeModel} onModelSelect={setActiveModel} />
      <div className="flex flex-col lg:flex-row gap-8 px-6 pb-8">
        <main className="flex-1">
          <PromptGrid activeModel={activeModel} />
        </main>
        <aside className="lg:w-[400px] lg:flex-shrink-0">
          <CustomPrompts />
        </aside>
      </div>
    </div>
  );
}

export default App;
