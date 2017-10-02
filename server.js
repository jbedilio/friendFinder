var express = require('express');

var bp = require('body-parser');

var path = require('path');

var app = express();

var PORT = 8000;

app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

var supers = require('./app/data/friends.js');

var htmlR = require('./app/routing/htmlRoutes.js');

htmlR(app, __dirname);

var apiR = require('./app/routing/apiRoutes.js');

apiR(app, __dirname, supers);


app.listen(PORT, () => {

    console.log('listening to PORT: ' + PORT);

});
