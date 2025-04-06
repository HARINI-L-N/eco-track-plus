import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white dark:bg-green-950 p-10 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-green-300 mb-6">
          Welcome to EcoTrack+ <FaLeaf className="inline ml-2" />
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Track your carbon footprint, embrace sustainability, and join the movement for a greener planet.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link
            to="/log-activity"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            Log Activity
          </Link>
          <Link
            to="/challenges"
            className="bg-green-100 hover:bg-green-200 text-green-900 font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            View Challenges
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
