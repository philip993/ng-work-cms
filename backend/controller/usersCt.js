const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../model/User");

exports.postSignup = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(userData => {
          res.status(201).json({
            userInfo: userData
          });
        })
        .catch(err => {
          res.status(500).json({
            message: "Cannot create new user!"
          });
        });
    })
    .catch(err => {
      res.status(500).json({
        message: "Cannot create user..!"
      });
    });
};

exports.postLogin = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Authentication failed!"
        });
      }
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      console.log(result);
      if (!result) {
        return res.status(404).json({
          message: "Authentication failed!!"
        });
      }
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        "test12345test12345",
        {
          expiresIn: "1h"
        }
      );
      console.log(token);
      res.status(200).json({
        token: token
      });
    })
    .catch(err => {
      res.status(401).json({
        message: "Wrong credentials!"
      });
    });
};
