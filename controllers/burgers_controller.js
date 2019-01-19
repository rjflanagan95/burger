var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(result) {
    res.render("index", { burgers: result });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    res.redirect("/burgers");
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(result) {
    res.sendStatus(200);
  });
});

module.exports = router;
