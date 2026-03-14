import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogCard = ({ post }) => {
    return (
        <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zinc-100 dark:border-zinc-800 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.coverImage || 'https://images.unsplash.com/photo-1499750310159-52f0f834631e?q=80&w=2070&auto=format&fit=crop'}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {post.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 mb-3 space-x-4">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime || '5 min read'}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                <p className="text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>

                <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mt-auto"
                >
                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
