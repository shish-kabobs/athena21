/**
 * GET /shop
 * load shop page.
 */
exports.getShop = (req, res) => {
    res.render('shop', {
        title: 'Shop'
    });
};


