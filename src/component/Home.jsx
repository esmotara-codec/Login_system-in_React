import React from 'react';
import {NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
      {/* Navigation */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">My Website</h1>
          <nav className="space-x-4">
            <a href="#home" className="text-blue-700 hover:text-blue-600">
              Home
            </a>
            <a href="/about" className="text-blue-700 hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="text-blue-700 hover:text-blue-600">
              Contact
            </a>
            <a href="/" className='text-blue-700 hover:text-blue-600'>Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-blue-500 text-white text-center py-20 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-lg mb-6">
          Discover amazing content and explore new possibilities.
        </p>
        <button className="px-6 py-2 bg-white text-blue-500 rounded-full shadow hover:bg-gray-200">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-4 py-12 text-center"
      >
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="text-gray-700">
          We are dedicated to providing high-quality content and services for
          our users. Learn more about what we do and how we can help you.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
    );
};

export default Home;