var express = require('express');

var bp = require('body-parser');

var path = require('path');

var app = express();

var PORT = process.env.PORT || 8000;

app.use(bp.urlencoded({ extended: true }));

app.use(bp.json());

var friends = require('./app/data/friends.js');

var htmlR = require('./app/routing/htmlRoutes.js');

htmlR(app, __dirname);

var apiR = require('./app/routing/apiRoutes.js');

apiR(app, __dirname, friends);


app.listen(PORT, () => {

    console.log('listening to PORT: ' + PORT);

});
