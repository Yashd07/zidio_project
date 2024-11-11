// src/components/Achievements.js
import React from 'react';

const Achievements = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-8">Our Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <img src="/path/to/achievement.jpg" alt="Achievement" className="w-full rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-blue-700">Award Title</h3>
          <p className="text-gray-600 mt-2">Brief description of the award or achievement.</p>
        </div>
        {/* Repeat for more achievements */}
      </div>
    </section>
  );
};

export default Achievements;
