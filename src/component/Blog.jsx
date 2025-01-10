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
           
           
            {/* Blog Post */}

            <section className="container mx-auto px-4 py-12">
                <h3 className="text-3xl font-bold mb-6 text-center">Latest Posts</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h4 className="text-xl font-bold mb-2 text-blue-600">{post.title}</h4>
                                <p className="text-gray-700 mb-4">{post.summary}</p>
                                <p className="text-sm text-gray-500">{post.date}</p>
                                <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline text-sm font-semibold mt-4 inline-block">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
        </div>
    );
};

export default Blog;