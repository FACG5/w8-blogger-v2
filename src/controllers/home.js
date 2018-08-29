const { getposts } = require('./../database/queries/getData');


exports.get = (req, res) => {
  getposts().then((result) => {
    console.log(result.rows);
    res.render('home');
  });
}
