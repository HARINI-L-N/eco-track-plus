import React from 'react';
import { FaLightbulb, FaBus, FaSeedling, FaRecycle } from 'react-icons/fa';

const tips = [
  {
    title: 'Energy Conservation',
    icon: <FaLightbulb className="text-yellow-400 text-2xl" />,
    description: 'Turn off lights and devices when not in use.',
  },
  {
    title: 'Green Transportation',
    icon: <FaBus className="text-blue-400 text-2xl" />,
    description: 'Opt for biking or public transport to reduce emissions.',
  },
  {
    title: 'Sustainable Diet',
    icon: <FaSeedling className="text-green-400 text-2xl" />,
    description: 'Incorporate more plant-based meals in your diet.',
  },
  {
    title: 'Waste Reduction',
    icon: <FaRecycle className="text-teal-300 text-2xl" />,
    description: 'Reuse, recycle, and reduce waste wherever possible.',
  },
];

const Tips = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 animate-fade-in">
      {tips.map((tip, idx) => (
        <div key={idx} className="p-5 rounded-xl shadow-md bg-gradient-to-br from-green-600 to-green-800 text-white transition transform hover:scale-105">
          <div className="flex items-center gap-3 mb-2">
            {tip.icon}
            <h3 className="text-xl font-semibold">{tip.title}</h3>
          </div>
          <p className="text-sm">{tip.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Tips;
