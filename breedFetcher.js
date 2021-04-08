const request = require('request');
const API = 'https://api.thecatapi.com/v1/breeds/search?q=';
// const catBreed = "siberian";
const userInput = process.argv[2];

request(API + userInput, (error, response, body) => {
  if (error) {
    console.log(`Failed request`);
  }
  const data = JSON.parse(body);
  
  if (data[0]) {
    console.log(data[0]["description"]);
  } else {
    console.log(`Could not find breed ${userInput}`);
  }
});
