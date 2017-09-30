var express = require('express');

var bp = require('body-parser');

var path = require('path');

var app = express();

var PORT = 8000;

app.listen(PORT, () => {

    console.log('listening to PORT: ' + PORT);

});