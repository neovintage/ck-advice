'use strict';
exports.topic = {
  name: 'ck',
    // this is the help text that shows up under `heroku help`
  description: 'sage advice from craig kerstiens'
};

exports.commands = [
require('./commands/ck.js')
];
