const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Post = require('./models/Post');
const Category = require('./models/Category');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected for seeding'))
    .catch((err) => console.log(err));

const seedPosts = [
    {
        title: 'The Future of Web Development: Trends to Watch in 2026',
        slug: 'future-of-web-development-2026',
        content: '<p>As we move further into the digital age, web development continues to evolve at a breakneck pace. From AI-driven interfaces to the rise of WebAssembly, here are the key trends defining the landscape in 2026...</p><h2>1. AI-Native Frameworks</h2><p>Frameworks are no longer just tools; they are intelligent assistants...</p>',
        excerpt: 'Explore the cutting-edge trends shaping web development in 2026, from AI integration to next-gen performance optimization.',
        coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
        category: 'Web Development',
        tags: ['Tech', 'Future', 'Web Dev'],
        author: 'Henry',
        readTime: '5 min'
    },
    {
        title: 'Mastering React 19: New Features You Need to Know',
        slug: 'mastering-react-19-new-features',
        content: '<p>React 19 has introduced game-changing features that simplify state management and server-side rendering. In this deep dive, we explore the new compiler and how it changes the way we write code...</p>',
        excerpt: 'A comprehensive guide to the latest features in React 19, including the new compiler and enhanced server components.',
        coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        category: 'Tutorials',
        tags: ['React', 'JavaScript', 'Coding'],
        author: 'Henry',
        readTime: '8 min'
    },
    {
        title: 'Designing for Accessibility: A Developer’s Guide',
        slug: 'designing-for-accessibility',
        content: '<p>Web accessibility is not just a requirement; it is a moral obligation. Creating inclusive digital experiences ensures that everyone, regardless of ability, can access information...</p>',
        excerpt: 'Learn the best practices for building accessible websites that adhere to WCAG guidelines and provide a better user experience for all.',
        coverImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
        category: 'Design',
        tags: ['Accessibility', 'UX', 'Design'],
        author: 'Henry',
        readTime: '6 min'
    },
    {
        title: 'Designing for Accessibility: A Developer’s Guide',
        slug: 'designing-for-accessibility',
        content: '<p>Web accessibility is not just a requirement; it is a moral obligation. Creating inclusive digital experiences ensures that everyone, regardless of ability, can access information...</p>',
        excerpt: 'Learn the best practices for building accessible websites that adhere to WCAG guidelines and provide a better user experience for all.',
        coverImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
        category: 'Design',
        tags: ['Accessibility', 'UX', 'Design'],
        author: 'Henry',
        readTime: '6 min'
    }
];

const seedDB = async () => {
    await Post.deleteMany({});
    await Post.insertMany(seedPosts);
    console.log('Database seeded successfully');
    mongoose.connection.close();
};

seedDB();
