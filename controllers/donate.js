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
    /**
     * const errors = req.validationErrors();
    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/donate');
    }
    else {
        let newDon = new Donation();
        newDon.item = req.body.item;
        newDon.donatedby = req.body.donatedby;
        if (req.file) {
            newDon.photo = '/uploads/' + req.file.filename;
        }
    }
    */
    let newDon = new Donation();
    newDon.item = req.body.item;
    newDon.donatedby = req.body.donatedby;
    if (req.file) {
        newDon.photo = '/uploads/' + req.file.filename;
    }
    newDon.save((err) => {
        if (err) {
            console.log(err);
            return;
        }
    })
};