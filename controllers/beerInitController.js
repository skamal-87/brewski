var Beerz = require('../models/beerSetup');
var request = require('request');
// 1350

module.exports = function(app){
    app.get('/api/setup/beers',function(req,res){
        for (var i = 2, l=3; i< l; i++) {
            request.get(
                {
                url: 'http://api.brewerydb.com/v2/beers/?key=db604178776b53ea35b7a2b51f8567b7' + `&p=${i}&hasLabels=Y`,
                json: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }, function (e, r, b) {
                if (r.statusCode != 200) {console.log(r); };
                if (e) {console.log(e)};
                console.log(b.data);
                for (var z = 1, t = b.data.length; z < t; z++ ){
                    let dataInt = {
                    }
                    dataInt.id = b.data[z].id;
                    dataInt.name = b.data[z].name;
                    dataInt.nameDisplay = b.data[z].nameDisplay;
                    dataInt.description = b.data[z].description;
                    dataInt.abv = b.data[z].abv;
                    if(b.data[z].labels){dataInt.icon = b.data[z].labels.medium}
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