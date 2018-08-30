const { addComment } = require('./../database/queries/addData');

exports.postComment = (req, res, next) => {
  console.log(req.body);
  console.log(req.jwt);
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
};
