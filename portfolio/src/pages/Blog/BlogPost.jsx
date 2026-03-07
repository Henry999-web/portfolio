import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../../services/api';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import Sidebar from '../../components/Blog/Sidebar';
import { Loader, Calendar, User, Clock, Share2 } from 'lucide-react';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const data = await getPost(slug);
            setPost(data);
            setLoading(false);
        };
        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
                <Loader className="w-12 h-12 text-blue-600 animate-spin" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black text-center px-4">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">404</h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400">Post not found.</p>
                <a href="/blog" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Go Back to Blog</a>
            </div>
        )
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-zinc-50 dark:bg-black pt-24 pb-12">

                {/* Header / Hero for Post */}
                <div className="relative h-[400px] w-full mb-12">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src={post.coverImage || 'https://images.unsplash.com/photo-1499750310159-52f0f834631e?q=80&w=2070&auto=format&fit=crop'}
                        className="w-full h-full object-cover"
                        alt={post.title}
                    />
                    <div className="absolute inset-0 z-20 container mx-auto px-4 flex flex-col justify-end pb-12">
                        <div className="max-w-4xl">
                            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded-full mb-4">
                                {post.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center text-zinc-300 gap-6 text-sm md:text-base">
                                <div className="flex items-center">
                                    <User className="w-5 h-5 mr-2" />
                                    {post.author}
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 mr-2" />
                                    {post.readTime || '5 min read'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Article Content */}
                        <div className="lg:col-span-8">
                            <div className="bg-white dark:bg-zinc-900 rounded-xl p-8 lg:p-12 shadow-sm border border-zinc-100 dark:border-zinc-800 prose dark:prose-invert max-w-none">
                                {/* For now, just rendering raw text/html. A rich text parser would be better */}
                                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>

                            {/* Share & Tags */}
                            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex gap-2">
                                    {post.tags && post.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full text-sm">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                                    <Share2 className="w-5 h-5 mr-2" />
                                    Share Article
                                </button>
                            </div>
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

export default BlogPost;
