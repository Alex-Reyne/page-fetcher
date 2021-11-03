// create node app that takes in two arguments 
// 1: a url, 2: a local filepath.

// node app
const request = require('request');
const arg = process.argv.slice(2);

const fileDownloader = function(url, filepath, httpRequest, download) {
  
  // download resource from url
  // save resource to local filepath
  
  // print message "Downloaded and saved 1235 bytes to ./index.html."

};

fileDownloader(arg[0], arg[1], request(arg[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}));

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
