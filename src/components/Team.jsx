// src/components/Team.js
import React from 'react';

const Team = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/path/to/team-member.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-blue-700">Member Name</h3>
          <p className="text-gray-600">Role / Position</p>
        </div>
        {/* Repeat for more team members */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/path/to/team-member.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-blue-700">Member Name</h3>
          <p className="text-gray-600">Role / Position</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/path/to/team-member.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-blue-700">Member Name</h3>
          <p className="text-gray-600">Role / Position</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/path/to/team-member.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-blue-700">Member Name</h3>
          <p className="text-gray-600">Role / Position</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/path/to/team-member.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-blue-700">Member Name</h3>
          <p className="text-gray-600">Role / Position</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src="/path/to/team-member.jpg" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-blue-700">Member Name</h3>
          <p className="text-gray-600">Role / Position</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
