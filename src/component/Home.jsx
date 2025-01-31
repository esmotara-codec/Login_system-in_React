import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
      {/* Navigation */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">WebTingo</h1>
          <nav className="space-x-4">
            <Link to="home" className="text-blue-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="about" className="text-blue-700 hover:text-blue-600">
              About 
            </Link>
            <Link to="contact" className="text-blue-700 hover:text-blue-600">
              Contact
            </Link>
            <Link to="login" className="text-blue-700 hover:text-blue-600">
              Login
            </Link>
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
       <section id="about" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-4">About Us</h3>
            <p className="text-gray-700 leading-relaxed">
              We are a team of passionate creators dedicated to delivering high-quality content and services.
              Our mission is to provide an engaging platform that fosters creativity, learning, and innovation.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Since our inception, we have helped thousands of users discover new opportunities and grow their skills.
              Join us on this journey and be part of something great!
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <div>
            {/* <img src="./../assets/images.jpg" alt="About Us" className="rounded-lg shadow-md"/> */}
            <img src="./../assets/images.jpg" alt="About US" />
            
          </div>
        </div>
      </section>
      <footer className="relative bg-gray-900 text-gray-300 py-10 px-5">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h6 className="text-lg font-semibold text-white mb-4">
                Services
              </h6>
              <ul>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Branding
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Advertisement
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h6 className="text-lg font-semibold text-white mb-4">Company</h6>
              <ul>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Press kit
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h6 className="text-lg font-semibold text-white mb-4">Legal</h6>
              <ul>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-500">
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Stay Connected */}
            <div>
              <h6 className="text-lg font-semibold text-white mb-4">
                Stay Connected
              </h6>
              <form>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded bg-gray-800 text-gray-200 border border-gray-600"
                />
                <button className="mt-4 w-full p-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          </footer>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 ">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
    );
};

export default Home;