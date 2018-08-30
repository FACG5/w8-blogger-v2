const { addPost } = require('./../database/queries/addData');


exports.newPost = (req, res, next) => {
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
