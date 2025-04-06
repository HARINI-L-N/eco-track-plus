import React from 'react';

const ChallengeCard = ({ title, description, completed, onToggle }) => {
  return (
    <div className="p-5 rounded-lg shadow-md border dark:border-gray-700 bg-white dark:bg-green-800 transition transform hover:scale-105 animate-fade-in">
      <h2 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded text-sm font-semibold transition-colors duration-300 ${
          completed
            ? 'bg-gray-400 text-white'
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        {completed ? 'Completed' : 'Accept Challenge'}
      </button>
    </div>
  );
};

export default ChallengeCard;
