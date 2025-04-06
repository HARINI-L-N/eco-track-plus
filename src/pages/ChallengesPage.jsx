import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';

const challenges = [
  {
    title: "Walk or Cycle",
    description: "Avoid using vehicles for short distances. Walk or cycle to reduce carbon emissions.",
  },
  {
    title: "Meatless Monday",
    description: "Eat vegetarian once a week to reduce carbon emissions from meat production.",
  },
  {
    title: "Unplug Devices",
    description: "Save energy by unplugging devices when not in use.",
  },
  {
    title: "Use Reusables",
    description: "Avoid single-use plastics. Carry reusable bottles, bags, and cutlery.",
  },
];

const ChallengesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800 py-10 px-6 text-gray-800 dark:text-white">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold flex items-center justify-center gap-2">
            <FaLeaf className="text-green-600 dark:text-green-400" /> Eco Challenges
          </h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
            Take on these fun challenges to reduce your carbon footprint!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 border border-green-200 dark:border-green-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">{challenge.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ChallengesPage;
