var express = require('express');

var bp = require('body-parser');

var path = require('path');

app.get('/api/supers', (req, res) => {
    res.json(supers);

});

app.post('/api/add', (req, res) => {

    var newSuper = req.body;

    console.log(newSuper);

    supers.push(newSuper);

    res.json(newSuper);
})

module.exports = apiR;