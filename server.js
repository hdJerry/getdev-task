const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();


const dotenv = require('dotenv');
dotenv.config();



var bodyParser = require('body-parser');


app

.use(express.static(path.join(__dirname, 'dist')))


        .use(bodyParser.json())

// .use(serveStatic(__dirname + "/dist"))
.use(function (request, response, next) {

    console.log(request.headers.origin);


    // Website you wish to allow to connect
    var allowedOrigins = [
        'http://localhost:8080',
        'https://getdev-task.herokuapp.com'
    ];
    var origin = request.headers.origin;


    if (allowedOrigins.indexOf(origin) > -1) {
        // console.log("Found Here ");
        response.setHeader('Access-Control-Allow-Origin', origin);
    }
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});


require(path.join(__dirname,'config','model.js'))

require(path.join(__dirname,'table','expenses.js'))(app)


const port = process.env.PORT || 8082;
app.listen(port);

console.log("running here :" + port);
