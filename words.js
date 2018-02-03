var Word = function (currentWord) {
    // this.name = name;
    this.printBlanksArray = function () {
        var currentWordArray = currentWord.split("");
	    var numberBlanks = currentWordArray.length;
        var blanksArray = [];
        for(var i = 0; i < numberBlanks; i++) {
            blanksArray.push("_");
        }
        console.log(blanksArray);
    }
    this.printCurrentWord = function () {
        console.log(currentWord);

    }
}

module.exports = Word;

// var node = new Word('node';)

// var selectedWord = "";
// var letterInSelectedWord = [];
// var numberBlanks = 0;

// var selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
// var	letterInSelectedWord = selectedWord.split("");
// var	numberBlanks = letterInSelectedWord.length;

// for(var i = 0; i < numberBlanks; i++) {
//     showBlankorLetters.push("_");
// }