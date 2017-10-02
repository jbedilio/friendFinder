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

            var gapArr = [];

            for(var j = 0; j < friends[i].scores.length; j++) {

                var gap = 0;

                gapDiff = Math.abs(newSuper.scores[j] - friends[i].scores[j]);

                gapArr.push(gapDiff);

                console.log(gapDiff);
            }

            var supersArr = [];

            for(var k = 0; k < friends[i].scores.length; k++) {

                gap += friends[i].scores[j];
            }

            gapArr.sort((x, y) => { return x - y });

            console.log('3', newSuper);
        

       // var superMatch = supersArr[0];
        //console.log(superMatch);
    }
        supers.push(newSuper);

        res.json(supers);
    });

    
    console.log("yo!");
};

module.exports = apiR;