// src/components/TeamVideos.js
import React from 'react';

const TeamVideos = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-8">Team Member Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <video className="w-full rounded-lg" controls>
            <source src="/path/to/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="text-xl font-semibold text-blue-700 mt-4">Member Name</h3>
          <p className="text-gray-600">Role / Position</p>
        </div>
        {/* Repeat for more team videos */}
      </div>
    </section>
  );
};

export default TeamVideos;
