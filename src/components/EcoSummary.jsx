import React from 'react';

const EcoSummary = ({ activities }) => {
  if (activities.length === 0) {
    return <p className="text-center text-gray-500 dark:text-green-200 animate-fade-in">No logs yet. Start tracking your activities!</p>;
  }

  return (
    <div className="bg-white dark:bg-green-800 p-6 rounded-lg shadow-md space-y-3 transition-all duration-300 animate-fade-in">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">Activity Summary</h2>
      {activities.map((entry, index) => (
        <div key={index} className="border-l-4 border-green-500 dark:border-green-300 pl-4 py-2 bg-green-50 dark:bg-green-900 rounded">
          <p><strong>Food:</strong> {entry.food}</p>
          <p><strong>Travel:</strong> {entry.travel}</p>
          <p><strong>Electricity:</strong> {entry.electricity}</p>
        </div>
      ))}
    </div>
  );
};

export default EcoSummary;
