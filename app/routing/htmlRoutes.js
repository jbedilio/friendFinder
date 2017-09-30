var express = require('express');

var bp = require('body-parser');

var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'survey.html'));
});

module.exports = htmlR;