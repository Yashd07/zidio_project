// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-8">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-700">Project Name</h3>
          <p className="text-gray-600 mt-4">Short project description.</p>
        </div>
        {/* Repeat similar project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
