'use strict';

let http = require('http');

module.exports = {
  topic: 'ck',
  command: 'advice',
  description: 'gives you ck advice',
  help: '',
  run: function (context) {
    var quotes = [
      "PM tip: Making a decision fast is better than waffling for the perfect one, use the data you have, make a decision, re-evaluate as you go",
      "pro-tip, just put Postgres in the title of a post and 300% increased chance of hitting front page",
      "not sure that qualifies as 'pro' maybe novice tip",
      "my #1 tip all your emails should be in a responsive well designed HTML template, because all developers love HTML email",
      "how have I not heard of this tip before as many times as I’ve been to Nashville",
      "the next tip was seltzer into regular wine to make champagne, adding this one to my list to try",
      "tip the toaster over?",
      "pro-tip: when responding to a person with a small question, don’t cc the mailing list unless you know people care",
      "Pro SQL Tip: When using an IN clause don’t have a limit on the SELECT that generates your list",
      "lunch pro tip: skip the salad to save room for the dessert crepe, pro tip 2: skip the savory crepe for an extra dessert crepe",
      "pro tip: use '-RT' in the search field for search.twitter.com Filters out a lot of the noise"
    ]
    var item = quotes[Math.floor(Math.random()*quotes.length)];
    console.log(item);
  }
};
