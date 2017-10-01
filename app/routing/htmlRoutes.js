var express = require('express');

var bp = require('body-parser');

var path = require('path');

var app = express();

var supers = require('./../data/friends.js');

function htmlR(app, __dirname) {

    app.get('/', (req, res) => {

        res.sendFile(path.join(__dirname, './app/public/home.html'));

    });

    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, './app/public/survey.html'));
    });
    console.log('yo!');
};

module.exports = htmlR;