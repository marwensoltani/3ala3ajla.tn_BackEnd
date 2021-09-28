var User = require("../models/user.model.js");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
module.exports = function (passport) {
  passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, email, password, callback) => {
        User.findOne({ email: req.body.email }, (err, user) => {
          if (err) throw err;
          if (!user) return callback(null, false);
          bcrypt.compare(password, user.password, (err, result) => {
            console.log(err,result);
            if (err) throw err;
            if (result === true) {
              callback(null, user);
            } else {
              callback(null, false);
            }
          });
        });
      }
    )
  );
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        email: user.email
      };
      cb(err, userInformation);
    });
  });
};
