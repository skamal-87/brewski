var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var usersController = require('./controllers/usersController');
var port = process.env.PORT || 3000;

app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine','ejs');

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });

mongoose.connect(config.getDbConnectionString());
 setupController(app);
// usersController(app);
apiController(app);

app.listen(port);