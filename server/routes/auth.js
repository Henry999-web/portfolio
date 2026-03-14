const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json('Wrong credentials!');

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json('Wrong credentials!');

        const { password, ...others } = user._doc;

        // Create JWT token
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET || 'secretkey', { expiresIn: '1d' });

        res.status(200).json({ ...others, token });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
