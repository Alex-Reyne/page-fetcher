// create node app that takes in two arguments 
// 1: a url, 2: a local filepath.

// node app
const request = require('request');
const fs = require('fs');
const arg = process.argv.slice(2);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fileDownloader = function(url, filepath, download) {

  request.get(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body: ', body);
  fs.stat(filepath, (err, stat) => {
    if (err) {
      download(body);
    } else { rl.question(`File already exists, overwrite? (y/n):\n`, (answer) => { 
        if (answer === 'y') {
          download(body);
        } if (answer === 'n') {
            rl.close();
          }
        });
      }
    })
  });
};

fileDownloader(arg[0], arg[1], (body) => {
  fs.writeFile(arg[1], body, err => { // download resource from url to filepath
    if (err) {
      throw err;
    }
    fs.stat(arg[1], (err, stats) => {
      if (err) {
        throw err;
      }
      // print message "Downloaded and saved 1235 bytes to ./index.html."
      console.log(`downloaded and saved ${stats.size} bytes to ${arg[0]}`);
      rl.close();
    });
  });
})

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
