import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navigation */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Our Company</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="/about" className="text-blue-600 font-bold">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          Learn more about our journey, mission, and values.
        </p>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold mb-6 text-center">Who We Are</h3>
        <p className="text-gray-700 leading-loose mb-8">
          Welcome to our company! We are a passionate team dedicated to
          providing the best products and services to our customers. Our journey
          started with a vision to make a difference in the industry, and we
          continue to strive for excellence every day.
        </p>

        <h3 className="text-3xl font-bold mb-6 text-center">Our Mission</h3>
        <p className="text-gray-700 leading-loose mb-8">
          Our mission is to innovate and deliver high-quality solutions that
          exceed expectations. We value creativity, integrity, and customer
          satisfaction, and these principles guide everything we do.
        </p>

        <h3 className="text-3xl font-bold mb-6 text-center">Our Team</h3>
        <p className="text-gray-700 leading-loose">
          Our team is composed of talented professionals from diverse
          backgrounds, bringing together expertise and dedication. Together, we
          work towards achieving our goals and making a positive impact.
        </p>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Our Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
