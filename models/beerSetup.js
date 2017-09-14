var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BeerSchema   = new mongoose.Schema({
    id: String,
    name: String,
    nameDisplay: String,
    description: String,
    abv: Number,
    icon: String,
    category: String
});

var Beerz = mongoose.model('Beerz',BeerSchema);

module.exports = Beerz;