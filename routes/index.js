var express = require("express");
var router = express.Router();
var Player = require("../models/player");
var Team = require("../models/team");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Football Tracker" });
});

router.post("/setPlayer", function (req, res, next) {
  let newPlayer = new Player({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    number: req.body.number,
  });

  newPlayer.save(function (err, response) {
    if (err) {
      console.log(err);
    } else {
      res.render("players", {
        title: "Player Created",
        firstName: newPlayer.firstName,
        lastName: newPlayer.lastName,
        number: newPlayer.number,
      });
    }
  });
});

router.get("/allPlayers", function (req, res, next) {
  Player.find({}, function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
      res.render("allPlayers", {
        title: "All Players",
        players: response,
      });
    }
  });
});

router.post("/makeTeam", function (req, res, next) {
  let newTeam = Team({
    teamName: req.body.teamName,
    players: [req.body.player],
  });

  newTeam.save(function (err, response) {
    console.log(response);
    if (err) {
      console.log(err);
    } else {
      Team.findOne({})
        .populate("players")
        .exec(function (err, response) {
          res.render("team", {
            title: "Team Created",
            teamName: response.teamName,
            player: response.players,
          });
        });
    }
  });
});

router.post("/deletePlayer/:id", function (req, res, next) {
  console.log(req.params.id);
  Player.findByIdAndDelete(req.params.id, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.send("DELETED");
    }
  });
});

module.exports = router;
