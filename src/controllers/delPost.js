const delPost = require('./../database/queries/deleteData');

exports.delPost = (req, res, next) => {
  // console.log(req.body);
  // console.log(req.jwt);
  const obj = {
    body: req.body.post, // post id 
    userid: req.jwt.id,
  };
  delPost(obj)
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};
