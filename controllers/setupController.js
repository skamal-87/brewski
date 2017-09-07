var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){
        // seed data
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy Milk',
                description: 'Go to the store and buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                description: 'Go to the store and buy dog food',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                description: 'Get on Udemy and learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos,function(err,results){
            res.send(results);
        });
    }); 
}