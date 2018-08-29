
exports.get = (req, res) => {
  getposts().then(()=>{
    res.render('home');
  })
  
}
