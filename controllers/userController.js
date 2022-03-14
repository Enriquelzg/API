const User = require('../models/userModel');

exports.findAllusers = function all(req, res) {
  User.find((err, usercontroller) => {
    if (err) res.send(500, err.message);
    return res.status(200).jsonp(usercontroller);
  });
};

exports.findById = function find(req, res) {
  User.findById(req.params.id, (err, usercontroller) => {
    if (err) return res.send(500, err.message);
    return res.status(200).jsonp(usercontroller);
  });
};

exports.adduser = function add(req, res) {
  const usercontroller = new User(req.body);
  usercontroller.save((err, usercontroller) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).jsonp(usercontroller);
  });
};

exports.updateuser = function update(req, res) {
  User.findById(req.params.id, (err, usercontroller) => {
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
  User.findById(req.params.id, (err, usercontroller) => {
    usercontroller.remove((error) => {
      if (error) return req.status(500).send(error.message);
      return res.status(200).send();
    });
  });
};
