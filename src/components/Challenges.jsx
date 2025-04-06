import React, { useState } from 'react';

const Challenges = () => {
  const [completed, setCompleted] = useState({});

  const challenges = [
    { id: 1, title: 'Meatless Monday 🍃' },
    { id: 2, title: 'No Plastic Day 🧴' },
    { id: 3, title: 'Walk to Work 🚶‍♂️' },
  ];

  const toggleComplete = (id) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-green-700 mb-4">🌱 Eco Challenges</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {challenges.map((c) => (
          <div 
            key={c.id}
            className={`p-4 rounded-lg shadow-md transition border 
              ${completed[c.id] ? 'bg-gray-200' : 'bg-white'}`}
          >
            <h3 className="font-semibold">{c.title}</h3>
            <button
              className={`mt-2 px-3 py-1 rounded text-sm font-medium 
                ${completed[c.id] ? 'bg-gray-500 text-white' : 'bg-green-600 text-white'}`}
              onClick={() => toggleComplete(c.id)}
            >
              {completed[c.id] ? 'Completed' : 'Accept'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
