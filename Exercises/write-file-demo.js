var fs = require('fs');

// var jsonString = '{ "name": "ETHAN" }';

var jsonString = {
    name: 'ETHAN'
};

fs.writeFile('data2.json', JSON.stringify(jsonString), function(err) {
    if(err) {
        console.log(err);
    }
});