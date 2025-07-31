import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development, from AI integration to serverless architecture.',
      author: 'KwanBH',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Technology',
      image: 'from-blue-500 to-purple-600',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn how to structure and optimize React applications for scalability, performance, and maintainability.',
      author: 'KwanBH',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Development',
      image: 'from-green-500 to-blue-500',
      featured: true
    },
    {
      id: 3,
      title: 'UI/UX Design Principles Every Developer Should Know',
      excerpt: 'Understanding core design principles that can help developers create better user experiences.',
      author: 'KwanBH',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Design',
      image: 'from-purple-500 to-pink-500',
      featured: false
    },
    {
      id: 4,
      title: 'Deploying Applications with Docker and Kubernetes',
      excerpt: 'A comprehensive guide to containerizing and orchestrating applications for production deployment.',
      author: 'KwanBH',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'DevOps',
      image: 'from-orange-500 to-red-500',
      featured: false
    },
    {
      id: 5,
      title: 'The Art of Code Reviews: Building Better Software Teams',
      excerpt: 'How effective code reviews can improve code quality, team collaboration, and knowledge sharing.',
      author: 'KwanBH',
      date: '2023-12-20',
      readTime: '10 min read',
      category: 'Team Management',
      image: 'from-teal-500 to-green-500',
      featured: false
    },
    {
      id: 6,
      title: 'Performance Optimization Techniques for Modern Web Apps',
      excerpt: 'Practical strategies for improving web application performance and user experience.',
      author: 'KwanBH',
      date: '2023-12-15',
      readTime: '11 min read',
      category: 'Performance',
      image: 'from-indigo-500 to-blue-500',
      featured: false
    }
  ];

  const categories = ['All', 'Technology', 'Development', 'Design', 'DevOps', 'Team Management', 'Performance'];
  const featuredPosts = posts.filter(post => post.featured);
  const recentPosts = posts.slice(0, 4);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge, experiences, and insights about web development, design, 
            and the ever-evolving world of technology.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In-depth articles on the latest trends and best practices in technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${post.image} h-64 flex items-center justify-center`}>
                  <span className="text-white text-lg font-medium">Article Image</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Tag className="h-3 w-3" />
                      <span>{post.category}</span>
                    </span>
                    <div className="flex items-center text-gray-500 text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <a
                    href={`#post-${post.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Latest articles and insights from my development journey
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-lg font-medium transition-colors duration-200 bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className={`bg-gradient-to-r ${post.image} h-48 flex items-center justify-center`}>
                  <span className="text-white font-medium">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <a
                    href={`#post-${post.id}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 inline-flex items-center space-x-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to get the latest articles and insights delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-r-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;