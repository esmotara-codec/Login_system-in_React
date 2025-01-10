import React from 'react';

const Blog = () => {
    return (
        <div>
             <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Our Blog</h1>
                    <nav className="space-x-4">
                        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
                        <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
                        <a href="/blog" className="text-blue-600 font-bold">Blog</a>
                        <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
                    </nav>
                </div>
            </header>
             {/* Hero Section */}
             <section className="bg-blue-500 text-white text-center py-20">
                <h2 className="text-4xl font-bold mb-4">Our Blog</h2>
                <p className="text-lg mb-6">Insights, stories, and tips from our team to inspire and inform you.</p>
            </section>
            
        </div>
    );
};

export default Blog;