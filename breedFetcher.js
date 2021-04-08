const request = require('request');
const API = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {

  request(API + breedName, (error, response, body) => {
    if (error) {
      callback(`ERROR ${error}`, null);
    } else {
      const data = JSON.parse(body)[0];
      if (data) {
        callback(null, data["description"]);
      } else {
        callback(`Breed ${breedName} does not exist`, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
