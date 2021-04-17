
/**
 * GET /home
 * load home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};
