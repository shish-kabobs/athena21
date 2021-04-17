const Donation = require('../models/Donation.js');
const multer = require('multer')


/**
 * GET /donate
 * Upload form page.
 */
exports.getDonate = (req, res) => {
    res.render('donate', {
        title: 'Donate'
    });
};

/**
 * POST /donate
 * Upload a donation
 */
exports.postDonate = (req, res) => {
    //multer object creation
    const storage = multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, './uploads/')
        },
        filename: function (req, file, callback) {
            callback(null, file.originalname)
        }
    })

    res.send("File upload successfully");
};
