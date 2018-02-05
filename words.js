var Word = function (currentWord) {
    this.printBlanksArray = function () {
        var currentWordArray = currentWord.split("");
	    var numberBlanks = currentWordArray.length;
        var blankOrLetters= [];
        for(var i = 0; i < numberBlanks; i++) {
            blankOrLetters.push('_');
        }
        console.log(blankOrLetters);
        // console.log(numberBlanks);
    }
    // this.printCurrentWord = function () {                 // Don't want to print the current word, but it's working
    //     console.log(currentWord);  
    // }
}

module.exports = Word;