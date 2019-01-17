const Letter = require("./Letter.js"); //call Letter constructor

class Word {
    constructor(word) {
        this.lettersArray = word.split('').map(letter => new Letter(letter)); //the word is split and the letter is pass into the Letter construct
        // 

    }
    getWord() { //function that prints out the strings of character and/or underscore

        let letters = this.lettersArray.map(item => {
            return item.result();
            // return item.result()
        });

        console.log(letters.join(' '));

    }
    isLetter(guessedLetter) { //function to check if the letter is part of the of the word

        this.lettersArray.forEach(letterClass => {
            return letterClass.checkAvailable(guessedLetter);
        });



    }
    checkTrue() { //function checks to see if all true for each character

        if (this.lettersArray.every(letter => (letter.availableLetter === true))) {
            return true;
        } else {
            return false;
        }
    }

}


// const someWord = new Word('hello');
// someWord.isLetter('h');
// // console.log(someWord);
// someWord.getWord();
// someWord.isLetter('e');
// someWord.getWord();
// someWord.isLetter('l');
// someWord.getWord();
// // someWord.checkTrue();
// someWord.isLetter('o');
// someWord.checkTrue();


module.exports = Word;