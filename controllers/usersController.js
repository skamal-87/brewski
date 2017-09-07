var Users = require('../models/usersModel');

module.exports = function(app){
    app.get('/api/setupusers',function(req,res){
        // seed data
        var starterUsers = [
            {
                username: 'test',
                password: 'test'
            },
            {
                username: 'test1',
                password: 'test1'
            }
        ];
        Users.create(starterUsers,function(err,results){
            res.send(results);
        });
    }); 
}