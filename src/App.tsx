import React, { useState } from 'react';
import { Header } from './components/Header';
import { ModelSelector } from './components/ModelSelector';
import { PromptGrid } from './components/PromptGrid';

function App() {
  const [activeModel, setActiveModel] = useState('ChatGPT');

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-blue-50 overflow-y-auto hide-scrollbar">
      <Header />
      <ModelSelector 
        activeModel={activeModel}
        onModelSelect={setActiveModel}
      />
      <main className="mt-6">
        <PromptGrid activeModel={activeModel} />
      </main>
    </div>
  );
}

export default App;