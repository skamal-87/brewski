var Users = require('../models/usersModel');

module.exports = function(app){
    app.get('/api/setupusers',function(req,res){
        // seed data
        var starterUsers = [
            {
                username: 'test',
                password: 'test',
                first: true
            },
            {
                username: 'test1',
                password: 'test1',
                first: true
            }
        ];
        Users.create(starterUsers,function(err,results){
            res.send(results);
        });
    }); 
}