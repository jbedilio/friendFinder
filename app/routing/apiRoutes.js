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

        var bar = 100;

        var superMatch = "";

        var superImg = "";

        var superArr = [];

        var newSuper = req.body;

        results.push(newSuper);

        console.log('1', results);

        for(var i = 0; i < friends.length; i++) {

            var gapArr = [];

            var gap = 0;

            for(var j = 0; j < friends[i].scores.length; j++) {

                gapDiff = Math.abs(parseFloat(newSuper.scores[j] - friends[i].scores[j]));

                gapArr.push(gapDiff);

                console.log('gapDiff', gapDiff);
            }

            for (var k = 0; k < gapArr.length; k++) {

                gap += gapArr[k];

                console.log('gap', gap);
            }

            if (gap < bar){
                
                bar = gap;

                superMatch = friends[i].alias;

                //superImg = friends[i].pic
            }
        }
    
        superArr.push(superMatch);

        //superArr.push(superImg);

        supers.push(newSuper);

        res.json(superArr);
    });

    console.log("yo!");
};

module.exports = apiR;