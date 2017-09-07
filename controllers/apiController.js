var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');
var Users = require('../models/usersModel');
const utils = require('../config/util');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/api/todos/:uname', function(req, res) {
        
        Todos.find({ username: req.params.uname }, function(err, todos) {
            if (err) throw err;
            
            res.send(todos);
        });
        
    });

    app.post('/api/login/', function(req, res) {
        let userName = req.body.userName;
        let password = req.body.password;
        Users.findOne({ username: userName, password: password }, function(err, users) {
        if (users) {
            utils.sendSuccessResponse(users, res);
            } 
        else {
            utils.sendErrorResponse(res);
            } 
        });
        
    });

    app.post('/api/signup/', function(req, res) {

        if (req.body.userName && req.body.password) {
            let userName = req.body.userName;
            let password = req.body.password;
            Users.create({ username: userName, password: password}, function(err, results) {
                if (err) utils.sendErrorResponse(res);
                utils.sendSuccessResponse(results, res);
                // this.$router.push('/home')
            });
        } else { 
            console.log('check');
            utils.sendErrorResponse(res);}

        
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