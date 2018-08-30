const delPost = require('./../database/queries/deleteData');

exports.delPost = (req, res, next) => {
  const obj = {
    body: req.body.post,
    userid: req.jwt.id,
  };
  delPost(obj)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};
