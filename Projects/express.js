const express = require('express');
const app = express();
const path = require('path');

<<<<<<< HEAD
app.use(express.static('public'));

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/fetchData.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/fetchData.js'));
});

app.get('/', function(req, res) {
    res.redirect('/home')
})

=======
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/node.html'));
});
>>>>>>> master

app.listen(5000);