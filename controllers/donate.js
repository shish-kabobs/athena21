const Donation = require('../models/Donation');

/**
 * GET /donate
 * load donate page.
 */

exports.getDonate = (req, res) => {
    res.render('donate', {
        title: 'Donate'
    });
};


/**
 * POST /donate
 * add a donation.
 */
exports.postDonate = (req, res, next) => {
    const errors = req.validationErrors();

    if (errors) {
        req.flash('errors', errors);
        res.redirect('/donate');
    }
    if (!req.body.item) {
        req.flash('errors', { msg: 'Please enter an item name' });
        res.redirect('/donate');
    }
    if (!req.file) {
        req.flash('errors', { msg: 'Please choose a file of the item to upload' });
        res.redirect('/donate');
    }
    const newDon = new Donation();
    newDon.item = req.body.item;
    newDon.donatedby = req.body.donatedby;
    newDon.status = 'Pending';

    newDon.photo = `/uploads/${req.file.filename}`;

    newDon.save((err) => {
        if (err) { return next(err); }
        req.flash('success', { msg: 'Success! You have uploaded an item.' });
        res.redirect('/');
    });
};
