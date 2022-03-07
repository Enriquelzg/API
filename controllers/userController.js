const { use } = require("express/lib/application");
let mongoose = require("mongoose");
let userController = mongoose.model("userController");

exports.findAlluserController = function (req, res) {
    userController.find(function (err, usercontroller) {
        if (err) res.send(500, err.message);

        console.log("GET /userController");
        res.status(200).jsonp(usercontroller);
    });
};

exports.findById = function(req, res) {
    userController.findById(req.params.id, function(err, usercontroller) {
    if(err) return res.send(500, err.message);

    console.log('GET /usercnotroller/' + req.params.id);
        res.status(200).jsonp(usercontroller);
    });
};

exports.adduserController = function (req, res) {
    console.log("POST");
    console.log(req.body);
  
    let usercontroller = new userController({
      title: req.body.title,
      year: req.body.year,
      country: req.body.country,
      poster: req.body.poster,
      seasons: req.body.seasons,
      genre: req.body.genre,
      summary: req.body.summary,
    });
  
    usercontroller.save(function (err, usercontroller) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(usercontroller);
    });
  };

exports.updateuserController = function (req, res) {
  userController.findById(req.params.id, function (err, usercontroller) {
    userController.title = req.body.petId;
    userController.year = req.body.year;
    userController.country = req.body.country;
    userController.poster = req.body.poster;
    userController.seasons = req.body.seasons;
    userController.genre = req.body.genre;
    userController.summary = req.body.summary;

    userController.save(function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(userController);
    });
  });
};