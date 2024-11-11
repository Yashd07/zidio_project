// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-8">Client Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700">"Working with Zidio Development was a fantastic experience. Their professionalism and dedication to the project were unmatched!"</p>
          <h3 className="mt-4 text-blue-700 font-semibold">- Client Name</h3>
        </div>
        {/* Repeat similar testimonial cards */}
      </div>
    </section>
  );
};

export default Testimonials;
