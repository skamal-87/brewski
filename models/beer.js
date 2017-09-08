var mongoose = require('mongoose');

// Define our beer schema
var BeerSchema   = new mongoose.Schema({
    id: String,
    name: String,
    nameDisplay: String,
    description: String 
    abv: Number,
    icon: String,
    category: String
});

// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);