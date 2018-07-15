'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================
var insults = [
  "Matt, you think you are full of Northern Wisdom. Riddle me this. What has girly blonde hair and is full of bull shit. Do you know the answer? It's you, you cunt!",

  "Matt, or shall I call you AbuMustafa. You're not a local, shut up and sit down.",

  "Matt, you are always going on about how client facing you are. Do you want to face some hard truths? You're a cunt!",

  "Matt, sarcasm is the lowest form of humour...Except for your shit puns, they are definitely worse.",

  "Matt, you are weak as shit. Sol said that you are the weakest boy in the class and that she would definitely own you in an arm wrestle. You're pathetic. Insect.",

  "Matt, I hear that you are from Hull. European city of culture? Don't make me laugh! ha!"
];
var linkers = [
    "Do you want some more?",
    "Can you handle another you slippery fucker?",
    "x"
];

app.setHandler({
    'LAUNCH': function() {
        this.ask("Welcome to Insult Matt! Matt is an interesting character. Who would like to insult him?", "Tell me your name dooch.");
    },

    'FirstInsultIntent': function(name) {
        this.ask("Hey Matt," + name.value + "wants to say this........." + insults[Math.floor(Math.random()*insults.length)] + ". Do you want some more?", "I'll take that as a no");
    },

    'AMAZON.YesIntent': function(){
        this.ask(insults[Math.floor(Math.random()*insults.length)]  + ". Do you want some more?", "I'll take that as a no");
    }
});

module.exports.app = app;
