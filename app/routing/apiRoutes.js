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
                
                var gap = 0;

                gapDiff = Math.abs(newSuper.scores[j] - friends[i].scores[j]);

                supersArr.push(gapDiff);

                console.log(gapDiff);

            }

            for(var k = 0; k < supersArr.length; k++) {

                gap += supersArr[k];



            }

            supersArr.sort((x, y) => { return x - y });

            console.log('3', newSuper);

            //supers.push(newSuper);

            res.json(supers);

        }

        

        var superMatch = supersArr[0].name;
        console.log(superMatch);
    });

    
    console.log("yo!");
};

module.exports = apiR;