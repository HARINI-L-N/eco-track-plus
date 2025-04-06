import React, { useState } from "react";
import { motion } from "framer-motion";

const ActivityForm = ({ onAdd }) => {
  const [activity, setActivity] = useState({
    food: "",
    travel: "",
    electricity: "",
  });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity.food || !activity.travel || !activity.electricity) return;
    onAdd(activity);
    setActivity({ food: "", travel: "", electricity: "" });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">
        Log Your Activity 🌱
      </h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Food Emissions (kg CO₂)</label>
        <input
          type="number"
          name="food"
          value={activity.food}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Travel Emissions (km)</label>
        <input
          type="number"
          name="travel"
          value={activity.travel}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Electricity Usage (kWh)</label>
        <input
          type="number"
          name="electricity"
          value={activity.electricity}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-black dark:text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-all duration-300"
      >
        Add Activity
      </button>
    </motion.form>
  );
};

export default ActivityForm;
