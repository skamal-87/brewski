var mongoose = require('mongoose');

// Define our beer schema
var UsersBeerSchema   = new mongoose.Schema({
    username: String,
    beers: [{
    id: String,
    name: String,
    nameDisplay: String,
    description: String,
    abv: Number,
    icon: String,
    category: String
}]
});

// Export the Mongoose model
module.exports = mongoose.model('UsersBeer', UsersBeerSchema);