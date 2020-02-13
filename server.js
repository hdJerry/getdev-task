const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();

app.use(express.static(path.join(__dirname, 'dist')));

require(path.join(__dirname,'config','model.js'))
const port = process.env.PORT || 8080;
app.listen(port);

console.log("running here :" + port);
