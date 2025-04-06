import React from 'react';
import Leaderboard from '../components/Leaderboard';

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen p-6 bg-nature-light dark:bg-nature-dark transition-colors duration-300 animate-fade-in">
      <h1 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-6 text-center">Leaderboard</h1>
      <div className="max-w-4xl mx-auto">
        <Leaderboard />
      </div>
    </div>
  );
};

export default LeaderboardPage;
