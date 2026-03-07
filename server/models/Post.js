const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    content: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        default: '',
    },
    author: {
        type: String, // could be ObjectId reference to User model if auth is implemented
        default: 'Admin',
    },
    category: {
        type: String,
        //    type: mongoose.Schema.Types.ObjectId,
        //    ref: 'Category',
        required: true,
    },
    tags: [String],
    views: {
        type: Number,
        default: 0,
    },
    metaTitle: String,
    metaDescription: String,
    isPublished: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
