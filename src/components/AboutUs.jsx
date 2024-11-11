// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-800">About Us</h1>
      <p className="mt-4 text-lg text-gray-700">
        Zidio Development is a leading provider of innovative technology solutions. Our journey began in 2020, and since then, we've
        achieved remarkable success in delivering top-notch software solutions to clients across the globe.
      </p>
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-blue-800">Key Achievements</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Successful delivery of 50+ tech projects</li>
          <li>Awarded 'Best Startup of the Year' 2022</li>
          <li>Certification in ISO 9001 for quality management</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
