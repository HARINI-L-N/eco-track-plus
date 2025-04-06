import React, { useState } from "react";
import { motion } from "framer-motion";

const LogActivity = ({ onLog }) => {
  const [formData, setFormData] = useState({
    food: "",
    travel: "",
    electricity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLog(formData);
    setFormData({ food: "", travel: "", electricity: "" });
  };

  return (
    <motion.div
      className="max-w-xl mx-auto p-6 bg-white dark:bg-green-950 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-100">
        Log Your Activity
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["food", "travel", "electricity"].map((field) => (
          <div key={field}>
            <label className="block text-left mb-1 text-gray-700 dark:text-gray-200 capitalize">
              {field} (kg CO₂)
            </label>
            <input
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field} impact`}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-green-900 dark:text-white"
              required
            />
          </div>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default LogActivity;
