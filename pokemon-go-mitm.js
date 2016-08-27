console.log("Yay.");

const fs = require('fs');
const util = require('util');
const PokemonGoMITM = require('pokemon-go-mitm');

const server = new PokemonGoMITM({port: 8081});
const log_file = fs.createWriteStream(__dirname + '/debug.log.js', {flags : 'a'});
const log_stdout = process.stdout;

const ignoreActions = [
  // 'CheckChallenge',
  // 'GetHatchedEggs',
  'GetInventory',
  // 'CheckAwardedBadges',
  // 'DownloadSettings',
  // 'GetDownloadUrls',
  'GetMapObjects',
];


server
  .addRequestHandler('*', (data, action) => {
    if (ignoreActions.indexOf(action) === -1) {
      console.log((new Date()).toLocaleTimeString('en-GB'), '[Request]', action, JSON.stringify(data, null, 2));
    }
    return false;
  })
  .addResponseHandler('*', (data, action) => {
    if (ignoreActions.indexOf(action) === -1) {
      console.log((new Date()).toLocaleTimeString('en-GB'), '[Response]', action, JSON.stringify(data, null, 2));
    }
    return false;
  });

console.log = function(d) { //
  log_file.write(util.format.apply(null, arguments) + '\n');
  log_stdout.write(util.format.apply(null, arguments) + '\n');
};
