const starWars = require('swapi-node');

starWars.get('https://swapi.co/api/people/').then((result) => {
    const people = result.name;
    console.log(people); 
});