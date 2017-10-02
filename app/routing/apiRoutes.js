var express = require('express');

var bp = require('body-parser');

var path = require('path');

var app = express();

var friends = require('./../data/friends.js');

var results = [];

function apiR(app, __dirname, supers) {

    app.get('/api/supers', (req, res) => {
        
        res.json(supers);

    });

    app.post('/api/add', (req, res) => {

        var newSuper = req.body;

        results.push(newSuper);

        console.log('1', results);

        console.log('2', newSuper);


        for(var i = 0; i < friends.length; i++) {

            var supersArr = [];

            for(var j = 0; j < friends[i].scores.length; j++) {
                
                //var gap = 0;

                gap = Math.abs(newSuper.scores[j] - supers[i].scores[j]);

                supersArr.push(gap);

            }
        console.log('3', newSuper);

        supers.push(results);

        res.json(supers);

        }

        supersArr.sort((x, y) => { return x - y });

        var superMatch = supersArr[0];

    });

    
    console.log("yo!");
};

module.exports = apiR;