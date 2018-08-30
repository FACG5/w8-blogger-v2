const { getposts } = require('./../database/queries/getData');

exports.get = (req, res) => {
  getposts()
    .then((result) => {
      result.rows.forEach((row, index) => {
        const obj = {
          post_name: row.user_name,
          post_body: row.post_body,
        };
        obj.comments = row.comment_body.map((value, index) => ({
          comment_body: value,
          name: row.name[index],
        }));
        result.rows[index] = obj;
      });
      const object = result.rows;
      console.log(object[0]);
      res.render('home', { obj: object});
    }).catch((error) => {
      console.log(error);
      res.send(error);
    });
};




