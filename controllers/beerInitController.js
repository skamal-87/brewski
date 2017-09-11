var Beerz = require('../models/beerSetup');
var request = require('request');
// 1350

module.exports = function(app){
    app.get('/api/setup/beers',function(req,res){
        for (var i = 1, l= 1000; i< l; i++) {
            let arrayD = [];
            request.get(
                {
                url: 'http://api.brewerydb.com/v2/beers/?key=db604178776b53ea35b7a2b51f8567b7' + `&p=${i}`,
                json: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }, function (e, r, b) {
                for (var z = 11, t = 16; z <= t; z++ ){
                    let dataInt = {
                    }
                    dataInt.id = b.data[z].id;
                    dataInt.name = b.data[z].name;
                    dataInt.nameDisplay = b.data[z].nameDisplay;
                    dataInt.description = b.data[z].description;
                    dataInt.abv = b.data[z].abv;
                    dataInt.isOrganic = b.data[z].isOrganic;
                    dataInt.category =  b.data[z].style.category.name; 
                    Beerz.create(dataInt,function(err,results){
                        console.log('added')
                    });
                    //b.data[z].style.category.name || '';
                }
            }
            )
            }
            }

            )};