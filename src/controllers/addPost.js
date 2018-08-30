const { addPost } = require('./../database/queries/addData');


exports.newPost = (req, res, next) => {
  if (!req.userAuth) {
    res.redirect('/login');
    return;
  }
  if (req.body.post.trim() === '') {
    res.redirect('/');
    return;
  }
  const obj = {
    body: req.body.post,
    userid: req.jwt.id,
  };
  addPost(obj)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};
