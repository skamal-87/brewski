var configValues = require('./config');
module.exports = {
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + ':' 
        + configValues.pwd + '@ds127034.mlab.com:27034/nodetodosample'
    }
}
