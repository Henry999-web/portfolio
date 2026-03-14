import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});
import { getPost, createPost, updatePost } from '../../services/api';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Save } from 'lucide-react';

const EditPost = () => {
    const { slug } = useParams(); // Using slug to fetch, but update might need ID if logic differs
    const navigate = useNavigate();
    const isEditMode = !!slug;
    const [selectedTab, setSelectedTab] = useState("write");

    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        coverImage: '',
        category: '',
        tags: '',
        author: 'Henry',
    });

    useEffect(() => {
        if (isEditMode) {
            const fetchData = async () => {
                const post = await getPost(slug);
                if (post) {
                    setFormData({
                        ...post,
                        tags: post.tags.join(', '), // flatten array to string for input
                    });
                }
            };
            fetchData();
        }
    }, [slug]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContentChange = (content) => {
        setFormData({ ...formData, content });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim()), // convert back to array
        };

        if (isEditMode) {
            // For update, we might need the ID. The fetched post object should have it.
            // Assuming getPost returns the full object including _id
            await updatePost(formData._id, postData);
            alert('Post updated successfully!');
        } else {
            await createPost(postData);
            alert('Post created successfully!');
        }
        navigate('/admin');
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-zinc-50 dark:bg-black pt-24 pb-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
                        {isEditMode ? 'Edit Post' : 'Create New Post'}
                    </h1>

                    <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 rounded-xl shadow p-8 space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Title</label>
                                <input
                                    type="text" name="title" required
                                    value={formData.title} onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Slug</label>
                                <input
                                    type="text" name="slug" required
                                    value={formData.slug} onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Excerpt</label>
                            <textarea
                                name="excerpt" rows="2" required
                                value={formData.excerpt} onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Cover Image URL</label>
                            <input
                                type="text" name="coverImage"
                                value={formData.coverImage} onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Category</label>
                                <input
                                    type="text" name="category" required
                                    value={formData.category} onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Tags (comma separated)</label>
                                <input
                                    type="text" name="tags"
                                    value={formData.tags} onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Content</label>
                            <ReactMde
                                value={formData.content}
                                onChange={handleContentChange}
                                selectedTab={selectedTab}
                                onTabChange={setSelectedTab}
                                generateMarkdownPreview={(markdown) =>
                                    Promise.resolve(converter.makeHtml(markdown))
                                }
                                childProps={{
                                    writeButton: {
                                        tabIndex: -1,
                                    },
                                }}
                            />
                        </div>

                        <div className="flex justify-end pt-6">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold flex items-center hover:bg-blue-700 transition"
                            >
                                <Save className="w-5 h-5 mr-2" />
                                Save Post
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default EditPost;
