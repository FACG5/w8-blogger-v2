const bcrypt = require('bcryptjs');

const hashPassword = password => new Promise((resolve, reject) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      reject({
        error: 'Erorr during generating salt',
      });
    } else {
      bcrypt.hash(password, salt, (error, hash) => {
        if (error) {
          reject({
            error: 'Erorr during generating hash',
          });
        } else {
          resolve(hash);
        }
        // Store hash in your password DB.
      });
    }
  });
});

const comparePasswords = (password, hashedPassword) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hashedPassword, (err, res) => {
    if (err) {
      reject({
        error: 'Erorr during comparing passwords',
      });
    } else {
      resolve(res);
    }
  });
});


module.exports = {
  comparePasswords,
  hashPassword,
};

