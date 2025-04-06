import React from 'react';
import Tips from '../components/Tips';

const TipsPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-950 via-gray-900 to-black transition-colors duration-300 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 flex items-center gap-3 text-green-400">
          Eco-Friendly Tips
        </h1>
        <Tips />
      </div>
    </div>
  );
};

export default TipsPage;
