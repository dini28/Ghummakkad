const express = require('express');
const router = express.Router();
const BookingData = require('../models/BookingData');
const jwt = require('jsonwebtoken');

// Middleware to verify token
const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secretString');
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ message: 'Token is not valid' });
    }
};

// Create a booking
router.post('/', auth, async (req, res) => {
    try {
        const { destination, checkIn, checkOut, guests, totalAmount } = req.body;

        const newBooking = new BookingData({
            userId: req.user.id,
            destination,
            checkIn,
            checkOut,
            guests,
            totalAmount
        });

        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get user bookings
router.get('/my-bookings', auth, async (req, res) => {
    try {
        const bookings = await BookingData.find({ userId: req.user.id });
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
