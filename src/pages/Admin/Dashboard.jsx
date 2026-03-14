import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../../services/api';
import { Edit, Trash2, Plus, Eye } from 'lucide-react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';

const Dashboard = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const data = await getPosts();
        setPosts(data);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            await deletePost(id);
            fetchPosts();
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-zinc-50 dark:bg-black pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Admin Dashboard</h1>
                        <Link
                            to="/admin/create"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition"
                        >
                            <Plus className="w-5 h-5 mr-2" />
                            Create New Post
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-xl shadow border border-zinc-100 dark:border-zinc-800 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                                <tr>
                                    <th className="p-4">Title</th>
                                    <th className="p-4">Category</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Views</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                                {posts.map((post) => (
                                    <tr key={post._id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                                        <td className="p-4 font-medium text-zinc-900 dark:text-white">
                                            {post.title}
                                        </td>
                                        <td className="p-4 text-zinc-600 dark:text-zinc-400">
                                            <span className="bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded text-xs">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-zinc-600 dark:text-zinc-400">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-4 text-zinc-600 dark:text-zinc-400">
                                            {post.views}
                                        </td>
                                        <td className="p-4 text-right space-x-2">
                                            <Link
                                                to={`/blog/${post.slug}`}
                                                className="inline-block p-2 text-zinc-400 hover:text-blue-500 transition"
                                                title="View"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </Link>
                                            <Link
                                                to={`/admin/edit/${post.slug}`}
                                                className="inline-block p-2 text-zinc-400 hover:text-green-500 transition"
                                                title="Edit"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(post._id)}
                                                className="inline-block p-2 text-zinc-400 hover:text-red-500 transition"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
