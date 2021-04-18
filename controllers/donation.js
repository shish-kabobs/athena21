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

/**
 * POST /donations
 * List all pending donations.
 */
exports.updateDonationStatus = (req, res) => {
    Donation.findById(req.body._id, (err, donation) => {
        if (err) { return next(err); }
        donation.status = "Accepted";
        // todo: also edit the user's karma
        donation.save((err) => {            
            req.flash('success', { msg: 'User will be notified you would appreciate their donation.' });
            res.redirect('/donations');
        });
    });
}

/**
 * POST /donations
 * List all pending donations.
 */
exports.rejectDonation = (req, res) => {
    Donation.findById(req.body._id, (err, donation) => {
        if (err) { return next(err); }
        donation.status = "Rejected";
        // also edit the user's karma
        donation.save((err) => {
            req.flash('success', { msg: 'User will be notified.' });
            res.redirect('/donations');
        });
    });
}