class Letter {
    constructor(underlyingLetter) {
        this.underlyingLetter = underlyingLetter;
        this.availableLetter = false;
        // this.result = this.result.bind(this);
        // this.checkAvailable = this.checkAvailable.bind(this);
    }
    result() {
        if (this.availableLetter) {
            return this.underlyingLetter;
        } else {
            return "_";
        }

    }
    checkAvailable(guessedLetter) {
        // console.log("USER GUESS LETTER", guessedLetter);
        // console.log("UNDERLYING", this.underlyingLetter)
        if (guessedLetter === this.underlyingLetter || this.availableLetter === true) {
            this.availableLetter = true;
        } else {
            this.availableLetter = false;
        }
        return this.availableLetter;
    }
}

module.exports = Letter;