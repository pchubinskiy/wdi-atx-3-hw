var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {

  var name = req.params.name;

  compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you",
    "Your instructors love you",
    "High five = ^5",
    "Is it Ruby Tuesday yet?",
    "It's almost beer o'clock",
    "The Force is strong with you",
  ];
  colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080",
  "#FFBF00", "#0080FF","#01DF3A","#FF0080", "#FFBF00", "#0080FF"];

  rndm_comp = compliments[Math.floor(Math.random()*10)];
  rndm_color = colors[Math.floor(Math.random()*10)];
  res.render('index', { title: 'Express', name: name, compliment: rndm_comp, color: rndm_color });
});

// router.get('/:name', function(req, res, next) {
//     // res.render('users/show', {
//     //     name: req.params.name,
//     //     favorite: null
//     // });
//   var name = req.params.name;
//     res.send("hi, I'm " + name);
// });

module.exports = router;
