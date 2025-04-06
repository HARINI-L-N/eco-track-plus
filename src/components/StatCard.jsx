import React from 'react';

const StatCard = ({ label, value, icon }) => {
  return (
    <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-lg w-full sm:w-[300px] animate-fade-in">
      <div className="text-2xl font-bold mb-1">{icon} {label}</div>
      <div className="text-xl">{value}</div>
    </div>
  );
};

export default StatCard;
