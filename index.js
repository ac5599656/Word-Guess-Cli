// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's remaining guesses
//installing inquirer
const inquirer = require('inquirer');
//calling the Word constructor
const Word = require("./Word.js");
//list of words
let wordList = ["hello", "jump", "drizzle", "lit"];
//get word by random
let someWord = wordList[Math.floor(Math.random() * wordList.length)];
//pass word into the Word construct
let newWord = new Word(someWord);
//number of chances the user can guess
let tries = someWord.length;
//an empty array to hold the letters guessed by the users
let guesses = [];
//Invoke guessLetter function.
guessLetter();
//Reset function rests guesses array, and number of tries.  Get another word by random and pass the new word into the Word constructor.  
//Lastly, invoke guessLetter function.  
function reset() {
    someWord = wordList[Math.floor(Math.random() * wordList.length)];
    guesses = [];
    tries = someWord.length;
    newWord = new Word(someWord);
    guessLetter();
}
//guessLetter function
//prompt users to guess a letter
function guessLetter() {
    inquirer.prompt([{
        name: "letter",
        type: "input",
        message: "Guess a letter?",

    }]).then((input) => {
        //Action taken when the user's input fits the condition where the user input is not in the guess array but it is a letter in the word
        if (guesses.indexOf(input.letter) === -1 && someWord.split("").indexOf(input.letter) >= 0) {
            console.log("CORRECT!!");
            newWord.isLetter(input.letter);
            newWord.getWord();
            newWord.checkTrue();
            guesses.push(input.letter);
            //Users automatically gets a new word when they guess the word.  Otherwise, guessLetter is called.
            if (newWord.checkTrue() === true) {
                console.log("You are ready for another word!")
                reset();
            } else {
                guessLetter();
            } //Action taken when the user's input fits the condition where the user input is not in the guess array and not part of the word.
        } else if (guesses.indexOf(input.letter) == -1 && someWord.split("").indexOf(input.letter) === -1) {
            console.log("INCORRECT!!!");
            guesses.push(input.letter);
            newWord.isLetter(input.letter);
            newWord.getWord();
            newWord.checkTrue();
            tries--
            console.log(`${tries} chances`);
            //when the number of tries equal to zero, it invokes the reset function.  Otherwise, guessLetter is invoked.
            if (tries === 0) {
                console.log("Sorry,better luck next time!")
                reset();
            } else {
                guessLetter();
            } //What happens when the input does not meet both conditions.  
        } else {
            console.log("You guessed the same letter")
            newWord.getWord();
            guessLetter();
        }

    })


}