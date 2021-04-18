/**
 * GET /karma
 * load karma page.
 */

exports.getKarma = (req, res) => {
    res.render('karma', {
        title: 'Karma'
    });
};