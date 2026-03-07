const router = require('express').Router();
const Post = require('../models/Post');
const { verifyToken } = require('../middleware/auth');

// GET all posts
router.get('/', async (req, res) => {
    try {
        const { cat } = req.query;
        let posts;
        if (cat) {
            posts = await Post.find({ category: cat }).sort({ createdAt: -1 });
        } else {
            posts = await Post.find().sort({ createdAt: -1 });
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET single post by slug
router.get('/:slug', async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        // Increment view count
        post.views += 1;
        await post.save();

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE new post
router.post('/', verifyToken, async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE post
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE post
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json('Post has been deleted...');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
