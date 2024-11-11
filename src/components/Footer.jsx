// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Zidio Development</h3>
          <p>Innovating the Future Together</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold">Contact</h4>
          <p>Email: support@zidio.in</p>
          <p>Phone: +91 1234567890</p>
        </div>
        <div className="flex space-x-4 justify-center md:justify-start">
          <a href="#!" className="text-white hover:text-blue-300">Facebook</a>
          <a href="#!" className="text-white hover:text-blue-300">LinkedIn</a>
          <a href="#!" className="text-white hover:text-blue-300">Twitter</a>
        </div>
      </div>
      <p className="text-center mt-6 text-sm">&copy; 2024 Zidio Development. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
