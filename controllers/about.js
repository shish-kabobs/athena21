
/**
 * GET /about
 * About form page.
 */
exports.getAbout = (req, res) => {
  res.render('about', {
    title: 'About',
  });
};
