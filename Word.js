const Letter = require("./Letter.js");

class Word {
    constructor(word) {
        this.lettersArray = word.split('').map(letter => new Letter(letter));
        // this.getWord = this.getWord.bind(this);

    }
    getWord() {

        let letters = this.lettersArray.map(item => {
            return item.result();
            // return item.result()
        });

        console.log(letters.join(' '));

    }
    isLetter(guessedLetter) {

        this.lettersArray.forEach(letterClass => {
            return letterClass.checkAvailable(guessedLetter);
        });



    }
    checkTrue() {

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