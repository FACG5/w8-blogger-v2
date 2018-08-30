const { post } = require('./../database/queries/addData');

exports.postComment = ({ body }, res, next) => {
  //user id from cokce
  // console.log(body);
  const obj = { 
    body,
    userid,
    postid,
  };
  // post.addComment(body,user,post).then(()=>{

  //   res.redirect('/');
  // }).catch(err => console.log(err));
};
