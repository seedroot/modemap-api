var express = require('express');
var apiToken = require('api-token')
var app = module.exports = express();
var router = express.Router();
var cntrl = require('./controller.js');

apiToken.setExpirationTime(2);

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authToken');
	next();
});


app.all('/api/*', function(req, res, next){
    if(req.url === '/api/authenticate'){
        /* token is not needed when authenticating */
        next();
    }else if(apiToken.isTokenValid(req.get('authToken'))){
        /* if token is valid continue */
        next();
    }else{
        /* if token is not valid send unauthorized http statuscode to client */
        res.send(401);
    }
});

app.post('/api/authenticate', function(req, res){
    var authenticated = true;
    /* do your authentication tricks */
    console.log('aaya');
    if(!authenticated){
        res.send(401);
    }else{
        var user = apiToken.addUser(req.body.deviceToken);
        /* send token back to client */
        res.send(200,{'token':user.token});
    }
});

require('./routes')(app);

/*app.get('/', function(req, res) {
	res.send(cntrl.getName().lastName);
});*/

app.listen(3000);