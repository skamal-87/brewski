var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');
var User = require('../models/usersModel');
const utils = require('../config/util');
var userController = require('./user');
var Beers = require('../models/beerSetup');
var UsersBeer = require('../models/usersBeer');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/api/todos/', function(req, res) {
        console.log(req.body.userName);
        let userName = req.body.userName;
        Todos.find({ username: userName }, function(err, todos) {
            if (err) throw err;
            res.send(todos);
        });
        
    });

    app.get('/api/beerz/', function(req, res) {
        Beers.find(function(err, beers) {
            if (err) throw err;
            res.send(beers);
        });
        
    });


    
    // Create endpoint /api/users for POST
    app.post('/api/users', function(req, res) {
      var user = new User({
        username: req.body.username,
        password: req.body.password
      });
    
      user.save(function(err) {
        if (err)
          res.send(err);
    
        res.json({ message: 'New user added!' });
      });
    });
    
    app.post('/api/beer/', function(req, res) {
       console.log(req.body);
       Beers.findOne({ name: req.body.name }, function(err, beer) {
           if (err) throw err;
           res.send(beer);
       });
        
    });
    

    app.post('/api/savedbeer', function(req, res) {
        console.log(req.body.username);
        UsersBeer.findOne({
            username: req.body.username
        }).exec(function(err, userBeer) {
            if (userBeer) {
                res.send(userBeer.beers);
            } else {
                    if (err) utils.sendErrorResponse(err, res);
                    res.send([]);
 
            }
        })
    });

    app.post('/api/usersbeer', function(req, res) {
        console.log(req.body.username);
        UsersBeer.findOne({
            username: req.body.username
        }).exec(function(err, user) {
            if (user) {
                UsersBeer.findOneAndUpdate({
                    username: req.body.username
                }, {
                    beers: req.body.beers
                }, function(err, todo) {
                    if (err) throw err;

                    res.send('Success');
                });
            } else {
                var newBeers = UsersBeer({
                    username: req.body.username,
                    beers: req.body.beers
                });
                newBeers.save(function(err) {
                    if (err) throw err;
                    res.send('Success');
                });
            }
        })
    });
    
    app.delete('/api/todo', function(req, res) {
        
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });
    
}