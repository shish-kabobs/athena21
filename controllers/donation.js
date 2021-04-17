/**
 * GET /donations
 * List all pending donations.
 */
const Donation = require('../models/Donation.js');

exports.getDonations = (req, res) => {
    Donation.find((err, docs) => {
        res.render('donations', { donations: docs });
    });
};