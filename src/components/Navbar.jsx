import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-green-100 dark:bg-green-900 shadow-md transition-colors duration-300">
      <div className="flex items-center space-x-2">
        <FaLeaf className="text-green-600 dark:text-green-300 text-xl" />
        <h1 className="text-xl font-bold text-green-800 dark:text-green-100">EcoTrack+</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/" className="text-green-700 dark:text-green-200 hover:underline">Home</Link>
        <Link to="/log" className="text-green-700 dark:text-green-200 hover:underline">Log</Link>
        <Link to="/challenges" className="text-green-700 dark:text-green-200 hover:underline">Challenges</Link>
        <Link to="/tips" className="text-green-700 dark:text-green-200 hover:underline">Tips</Link>
        <Link to="/leaderboard" className="text-green-700 dark:text-green-200 hover:underline">Leaderboard</Link>
        <button onClick={toggleDarkMode} className="text-green-700 dark:text-green-200 transition-transform hover:scale-110">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
