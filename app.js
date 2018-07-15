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

  "Matt, or shall I call you AbuMustafa. You're not a local, shut up and sit down",

  "You are always going on about how client facing you are. Do you want to face some hard truths? You're a cunt!",

  "Sarcasm is the lowest form of humour...Except for your shit puns, they are definitely worse",

  "You are weak as shit. Sol said that you are the weakest boy in the class and that she would definitely own you in an arm wrestle. You're pathetic. Insect",

  "I hear that you are from Hull. European city of culture? Don't make me laugh! ha!",

  "you are in your early thirties and you don't know how to cook. Get a life",

  "We make jokes, but deep down I think really highly of you. Unfortunately we think you are highly irritating",

  "The only good thing I can say about you are your tight presentations. Only joking. You come across sleezy"
];
var linkers = [
    "Do you want some more? Bint.",

    "Can you handle another you slippery fuck?",

    "I could go on all day....... shall I keep going. Gangly shit?",

    "Want another slap, you vermin?"
];

app.setHandler({
    'LAUNCH': function() {
        this.ask("Welcome to Insult Matt! Who would like to insult him?", "Oi!!! Your name please.");
    },

    'FirstInsultIntent': function(name) {
        this.ask("Hey Matt," + name.value + "wants to say this........." + insults[Math.floor(Math.random()*insults.length)] + linkers[Math.floor(Math.random()*linkers.length)], "Oi you useless low-life. Answer me!");
    },

    'AMAZON.YesIntent': function(){
        this.ask(insults[Math.floor(Math.random()*insults.length)]  + linkers[Math.floor(Math.random()*linkers.length)], "I'm speaking to you sofa boy. Respond.");
    },

    'AMAZON.NoIntent': function(){
        this.tell("Okay... slither off to bed then");
    }
});

module.exports.app = app;
