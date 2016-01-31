var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
	return colors[Math.floor(Math.random()*colors.length)];
}

/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
	var color = randomColor();

    res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color });
});

/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	name = req.params.name || "Friend";
	var color = randomColor();

  Compliment.findOneRandom({}, 'compliment', function(err, compliment) {
    if (err) console.log(err);
    console.log(compliment);
	res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment.compliment });
  });
});

/* POST compliment. */
router.post('/', function(req, res, next) {
	var compliment = req.body.compliment;

  var newCompliment = Compliment({
    compliment: compliment
  });

  newCompliment.save(function(err) {
    if (err) console.log(err);
    // USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
    res.redirect('/');
  });
});

module.exports = router;
