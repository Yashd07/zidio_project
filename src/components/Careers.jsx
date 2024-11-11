// src/components/Careers.js
import React from 'react';

const Careers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800">Career Opportunities</h1>
      <p className="mt-4 text-lg text-gray-700">Join our innovative team and build the future of technology!</p>

      {/* Example of a job listing */}
      <div className="mt-8 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-800">Software Developer</h2>
          <p className="mt-2 text-gray-700">Looking for passionate developers to join our team and work on exciting projects.</p>
          <button className="mt-4 bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
