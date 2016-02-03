var express = require('express');
var router = express.Router();
var secret = require('../secret');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  //res.send("message sent");
  var number_to = req.body.to;
  var text_message = req.body.message;

  //Twilio Credentials
  var accountSid = secret.twilio.sId;
  var authToken = secret.twilio.secret;

  //require the Twilio module and create a REST client
  var client = require('twilio')(accountSid, authToken);

  client.messages.create({to: "+8325288983", from: "+18325547895", body: "testing",
  }, function(err, message) {
    if (err) console.log("error");
    console.log(message.sid);
    //res.send("message sent");
    //res.render('index', { title: 'Express' });
  });
  // console.log(number_to, text_message);
  // res.render('index', { title: 'Express' });
});

// router.post('/', function(req, res, next) {
//   console.log("worked");
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
