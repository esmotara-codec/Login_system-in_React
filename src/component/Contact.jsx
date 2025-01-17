import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>
      </header>
      <main className="p-6">
        <section className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            Have questions or feedback? We'd love to hear from you! Fill out the form below or reach us at:
          </p>
          <p className="text-lg font-medium mb-6">
            Email: <a href="mailto:info@yourcompany.com" className="text-blue-500">info@yourgmail.com</a>
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
