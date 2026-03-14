import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BlogCard from '../../components/Blog/BlogCard';
import Sidebar from '../../components/Blog/Sidebar';
import { getPosts } from '../../services/api';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Loader } from 'lucide-react';

const BlogListing = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const searchParams = new URLSearchParams(search);
            const cat = searchParams.get('cat');
            const data = await getPosts(cat);
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className="min-h-screen bg-zinc-50 dark:bg-black pt-24 pb-12">

                {/* Hero Section */}
                <div className="container mx-auto px-4 mb-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                            Insights & <span className="text-blue-600">Thoughts</span>
                        </h1>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Exploring the latest in web development, design patterns, and tech careers.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            {loading ? (
                                <div className="flex justify-center items-center h-64">
                                    <Loader className="w-12 h-12 text-blue-600 animate-spin" />
                                </div>
                            ) : posts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {posts.map((post) => (
                                        <BlogCard key={post._id} post={post} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-xl">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">No posts found</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">Try checking back later or search for something else.</p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <Sidebar />
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogListing;
