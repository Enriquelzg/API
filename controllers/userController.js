const User = require('../models/userModel');

exports.getAllusers = function all(req, res) {
  User.find((err, user) => {
    if (err) res.send(500, err.message);
    return res.status(200).jsonp(user);
  });
};

exports.getUser = function find(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.send(500, err.message);
    return res.status(200).jsonp(user);
  });
};

exports.adduser = function add(req, res) {
  const user = new User(req.body);
  user.save((err) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).jsonp(user);
  });
};

exports.updateuser = function update(req, res) {
  User.findById(req.params.id, (err) => {
    User.name = req.body.name;
    User.password = req.body.password;
    if (err) return res.status(500).send({ err });

    User.save((error) => {
      if (error) return res.status(500).send(error.message);
      return res.status(200).jsonp(User);
    });
    return res.status(200).jsonp(User);
  });
};

exports.deleteuser = function deleteuser(req, res) {
  User.findById(req.params.id, (user) => {
    user.remove((error) => {
      if (error) return req.status(500).send(error.message);
      return res.status(200).send();
    });
  });
};
