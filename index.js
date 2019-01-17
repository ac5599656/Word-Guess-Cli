// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses

const inquirer = require('inquirer');
const Word = require("./Word.js");
let wordList = ["hello", "jump", "drizzle", "lit"];
let someWord = wordList[Math.floor(Math.random() * wordList.length)];
let newWord = new Word(someWord);
let tries = someWord.length;
let guesses = [];
guessLetter();

function reset() {
    someWord = wordList[Math.floor(Math.random() * wordList.length)];
    guesses = [];
    tries = someWord.length;
    newWord = new Word(someWord);
    guessLetter();
}

function guessLetter() {
    inquirer.prompt([{
        name: "letter",
        type: "input",
        message: "Guess a letter?",

    }]).then((input) => {

        if (guesses.indexOf(input.letter) === -1 && someWord.split("").indexOf(input.letter) >= 0) {
            console.log("CORRECT!!");
            newWord.isLetter(input.letter);
            newWord.getWord();
            newWord.checkTrue();
            guesses.push(input.letter);
            if (newWord.checkTrue() === true) {
                console.log("hit")
                reset();
            } else {
                guessLetter();
            }


        } else if (guesses.indexOf(input.letter) == -1 && someWord.split("").indexOf(input.letter) === -1) {
            console.log("INCORRECT!!!");
            guesses.push(input.letter);
            newWord.isLetter(input.letter);
            newWord.getWord();
            newWord.checkTrue();
            tries--
            console.log(tries);
            if (tries === 0) {
                console.log("Sorry,better luck next time!")
                reset();
            } else {
                guessLetter();
            }
        } else {
            console.log("You guessed the same letter")
            newWord.getWord();
            guessLetter();
        }

    })


}