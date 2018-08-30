const { addComment } = require('./../database/queries/addData');

exports.postComment = (req, res, next) => {
  console.log(req.userAuth);
  if (!req.userAuth) {
    console.log('11newcomment');
    res.redirect('/login');
    console.log('22newcomment');
  } else {
    // console.log(req.body);
    // console.log(req.jwt);
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
  console.log('33newcomment');
};
