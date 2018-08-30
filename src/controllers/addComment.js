const { addComment } = require('./../database/queries/addData');

exports.postComment = (req, res, next) => {
  if (!req.userAuth) {
    res.redirect('/login');
  } else {
    const obj = {
      body: req.body.comment,
      userid: req.jwt.id,
      postid: req.body.post_id,
    };
    addComment(obj)
      .then(() => {
        res.redirect('/');
      })
      .catch(err => console.log(err));
  }
};
