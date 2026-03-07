import React from 'react';
import { Search, Tag, Mail } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="space-y-8 sticky top-24">
            {/* Search Widget */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Search</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full pl-10 pr-4 py-2 bg-zinc-50 dark:bg-zinc-800 border-none rounded-lg focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-white"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-zinc-400" />
                </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Categories</h3>
                <div className="flex flex-col space-y-2">
                    {['Web Development', 'Design', 'Career', 'Tutorials'].map((cat) => (
                        <a
                            key={cat}
                            href={`/blog?cat=${cat}`}
                            className="flex items-center justify-between text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <span className="flex items-center">
                                <Tag className="w-4 h-4 mr-2" />
                                {cat}
                            </span>
                            <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-xs">
                                {Math.floor(Math.random() * 10) + 1}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-white">
                <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 mr-2" />
                    <h3 className="text-lg font-bold">Newsletter</h3>
                </div>
                <p className="text-blue-100 text-sm mb-4">
                    Get the latest articles and resources sent straight to your inbox.
                </p>
                <form className="space-y-2">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-2 bg-blue-700/50 border border-blue-500 rounded-lg placeholder-blue-300 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Sidebar;
