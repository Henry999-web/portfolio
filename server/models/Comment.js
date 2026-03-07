const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String, // Optional, for avatar or contact
    },
    content: {
        type: String,
        required: true,
    },
    parentCommentId: {
        type: mongoose.Schema.Types.ObjectId, // For nested comments
        ref: 'Comment',
        default: null,
    },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
