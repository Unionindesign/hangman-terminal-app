const inquirer = require('inquirer');
const Word = require('./words.js');

var wordsArray = ['node', 'javascript', 'react', 'fullstack', 'mongodb', 'mysql', 'angular', 'MERN', 'css', 'java', 'html',];  // '',

var currentWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

function startGame () {
    var wordPicked = new Word(currentWord);
    wordPicked.printBlanksArray();
    wordPicked.printCurrentWord();
    
}

startGame();

function letterChecker () {
    //adding some comments for gitTest1
    
}

// inquirer - ask for a guess
// go through the wordPicked, compare userGuess (stored in a variable), iterate thru word array with a loop to compare 