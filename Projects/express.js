const express = require('express');
const app = express();
const path = require('path');

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/', function(req, res) {
    res.redirect('/index.html')
})



app.listen(5000);