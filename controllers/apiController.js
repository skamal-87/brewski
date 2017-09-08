var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');
var User = require('../models/usersModel');
const utils = require('../config/util');
var userController = require('./user');

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

    app.get('/api/users', function(req, res) {
        User.find(function(err, users) {
          if (err)
            res.send(err);
      
          res.json(users);
        });
      });
    
    app.get('/api/todo/:id', function(req, res) {
       
       Todos.findById({ _id: req.params.id }, function(err, todo) {
           if (err) throw err;
           
           res.send(todo);
       });
        
    });
    
    app.post('/api/todo', function(req, res) {
        
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, { todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, todo) {
                if (err) throw err;
                
                res.send('Success');
            });
        }
        
        else {
           
           var newTodo = Todos({
               username: 'test',
               todo: req.body.todo,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
           });
           newTodo.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });
            
        }
        
    });
    
    app.delete('/api/todo', function(req, res) {
        
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });
    
}