import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-8 mt-20">
      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-center text-blue-800  mb-10">Contact Us</h1>
      
      <h2 className="text-3xl font-bold mb-8">Write to Us Anytime</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-md"
            />
            <input
              type="email"
              placeholder="Enter E-Mail"
              className="p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 border rounded-md"
            />
            <select className="p-3 border rounded-md">
              <option value="">Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
            </select>
            <textarea
              placeholder="Write Message"
              className="p-3 border rounded-md col-span-2"
              rows="4"
            ></textarea>
            <button className="col-span-2 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-500 text-white p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Don’t Forget to Contact Us</h2>
          <p className="mb-4"><i className="fas fa-phone-alt mr-2"></i> Call Us: +918455807965</p>
          <p className="mb-4"><i className="fas fa-envelope mr-2"></i> Send E-Mail: support@zidio.in</p>
          <p><i className="fas fa-clock mr-2"></i> Office Hours: 9.00 AM to 5.00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
