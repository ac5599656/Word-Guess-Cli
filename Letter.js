//Class constructor
class Letter {
    constructor(underlyingLetter) {
        this.underlyingLetter = underlyingLetter; //Equals to a letter part of the word.  //
        this.availableLetter = false; //Tells if the letter is in the word.  By default, it set to false.
    }
    result() { //result function that prints a string of word and underscore
        if (this.availableLetter) {
            return this.underlyingLetter;
        } else {
            return "_";
        }

    }
    checkAvailable(guessedLetter) { //checkAvailable function determines if the letter is in the word
        console.log("USER GUESS LETTER", guessedLetter);
        console.log("UNDERLYING", this.underlyingLetter)
        if (guessedLetter === this.underlyingLetter.toLowerCase() || this.availableLetter === true) {
            this.availableLetter = true;
        } else {
            this.availableLetter = false;
        }
        return this.availableLetter;
    }
}

module.exports = Letter;