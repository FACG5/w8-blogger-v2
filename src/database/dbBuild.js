const fs = require('fs');
const path = require('path');
const dbConnection = require('./dbConnection');

const sql = fs.readFileSync(path.join(__dirname, 'build.sql')).toString();

const dbBuild = cb => dbConnection.query(sql, (err, res) => {
  if (err) cb(err);
  cb(null, res);
});

module.exports = dbBuild;
