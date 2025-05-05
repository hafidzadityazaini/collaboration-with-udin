// File: App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6 space-y-12">
      {/* Section 1 */}
      <section className="w-full max-w-3xl flex flex-col items-center">
        <header className="text-3xl font-bold text-gray-800 mb-6">
          Project collaboration with Adit
        </header>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Punya Adit</h1>
        <img
          src="Gpt.png"
          alt="Collaboration project"
          className="rounded-2xl shadow-lg w-full"
        />
      </section>
      {/* Section 2 */}
      <section className="w-full max-w-3xl flex flex-col items-center">
        <header className="text-3xl font-bold text-gray-800 mb-6">
          Project collaboration with Udin's
        </header>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Punya Udin</h1>
        <img
          src="freaky.jpg"
          alt="Collaboration project"
          className="rounded-2xl shadow-lg w-full"
        />
      </section>
    </div>
  );
}

export default App;
