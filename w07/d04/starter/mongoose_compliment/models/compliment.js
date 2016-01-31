var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

// var Schema = mongoose.Schema;

var complimentSchema = new mongoose.Schema({
 compliment: { type: String, required: true }
});
complimentSchema.plugin(random);

var Compliment = mongoose.model('Compliment', complimentSchema);
// Make this available to our other files
module.exports = Compliment;
