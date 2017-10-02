var express = require('express');

var bp = require('body-parser');

var path = require('path');

var app = express();

var supers = require('./../data/friends.js');

function apiR(app, __dirname, supers) {

    app.get('/api/supers', (req, res) => {
        
        res.json(supers);

    });

    app.post('/api/add', (req, res) => {

        var newSuper = req.body;

        //console.log(newSuper);

        supers.push(newSuper);

        res.send(supers);
    });

    
    console.log("yo!");
};

module.exports = apiR;