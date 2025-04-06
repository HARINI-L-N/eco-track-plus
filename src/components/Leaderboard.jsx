import React from 'react';
import { FaCrown } from 'react-icons/fa';

const Leaderboard = () => {
  const users = [
    { name: 'GreenWarrior', score: 920 },
    { name: 'EcoMaster', score: 860 },
    { name: 'PlanetHero', score: 820 },
    { name: 'TreeHugger', score: 790 },
    { name: 'CarbonCutter', score: 750 },
  ];

  return (
    <div className="bg-white dark:bg-green-800 p-6 rounded-lg shadow-md transition-all duration-300 animate-fade-in">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">Leaderboard</h2>
      <ul className="space-y-3">
        {users.map((user, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-2 last:border-0">
            <span className="font-semibold text-green-700 dark:text-green-200">
              {index === 0 ? <FaCrown className="inline mr-1 text-yellow-400" /> : index + 1}.
              {user.name}
            </span>
            <span className="text-green-600 dark:text-green-100 font-bold">{user.score} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
