
var Letter = function (letter) {
    var blankOrLetters = [];
    var letterInWord = [];
    var numberBlanks = 0;

    this.printLetterOrBlank = function(letter) {
        var letterInWord = false;
        for(var i = 0; i < numberBlanks; i++) {
            if(this.wordPicked[i] === letter) {
                letterInWord = true;
            }
        }
    }
    if (!(blankOrLetters.indexOf(letter)>0)) {
        if(letterInWord) {
            for(i = 0; i <numberBlanks; i++) {
                if(wordPicked[i] === letter) {
                    blankOrLetters[i] = letter;
                    console.log(blankOrLetters);

                }
            }
        }
        else{
            guessCount --;
            // blankOrLetters.push(letter);
            
        }
    }
}

module.exports = Letter;
