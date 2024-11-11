// src/components/Timeline.js
import React from 'react';

const Timeline = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800">Our Journey</h1>
      <div className="mt-8 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-800">2020: Company Founded</h2>
          <p className="mt-2 text-gray-700">Zidio Development was founded with the goal of providing innovative tech solutions to businesses.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-800">2022: Awarded 'Best Startup'</h2>
          <p className="mt-2 text-gray-700">In 2022, Zidio Development was recognized as the best startup in the tech industry.</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
