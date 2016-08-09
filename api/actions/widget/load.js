
const pogobuf = require('pogobuf');
const POGOProtos = require('node-pogo-protos');
const botState = require('../../bot/botState');

export default function load(req) {
  return new Promise((resolve, reject) => {
    resolve(botState);
  });
}

