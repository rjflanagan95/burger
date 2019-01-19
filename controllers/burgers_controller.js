var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/burgers", function(req, res) {
  burger.selectAll(function(result) {
    res.render("index", { burgers: result });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
