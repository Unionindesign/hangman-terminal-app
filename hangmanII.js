const inquirer = require('inquirer');
const Word = require('./words.js');
const Letter = require('./letters.js');

var wordsArray = ['node', 'javascript', 'react', 'fullstack', 'mongodb', 'mysql', 'angular', 'MERN', 'css', 'java', 'html',];  // '',
var currentWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

var	guessCount = 12;
var letterInSelectedWord = [];
// var numberBlanks = 0;
// var blankOrLetters = [];

function startGame() {
    var wordPicked = new Word(currentWord);
    wordPicked.printBlanksArray();
    // wordPicked.printCurrentWord();   Don't show them the answer! but works
}

function letterChecker() {
    // var userGuess = process.argv[2];
    var userGuess = new Letter();
    inquirer.prompt(
        [
            {   
                name: 'userGuess',
                type: 'input',
                message: 'Guess a Letter:'
            }
        ]).then(answers => {
            var userGuess = new Letter(answers);
            userGuess.printLetterOrBlank();
        });
}

startGame();
letterChecker();


// inquirer - ask for a guess
// go through the wordPicked, compare userGuess (stored in a variable), iterate thru word array with a loop to compare 