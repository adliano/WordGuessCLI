//  Word.js: Contains a class, Word that depends on the Letter class. This is used to create an object 
// representing the current word the user is attempting to guess. That means the class should define:
// - An array of new Letter objects representing the letters of the underlying word
// - A function that returns a string representing the word. This should call the function on 
// each letter object (the first function defined in Letter.js) that displays the character or
// an underscore and concatenate those together.
// - A function that takes a character as an argument and calls the guess function on 
// each letter object (the second function defined in Letter.js)

const inspect = Symbol.for('nodejs.util.inspect.custom');

/**
 * @module lib/Letter
 */
let myLetter = require("./Letter.js");
/**
 * Class representing the 
 * current word the user is attempting to guess
 */
class Word {
  /**
   * @constructor
   * @param {string} word word to be guess by user
   */
  constructor(word) {
    /**
     * Array of new Letter objects representing the letters of the underlying word
     * @type {Letter[]}
     */
    this.arrOfLetter = [];

    for (let _char of word.split('')) {
      this.arrOfLetter.push(new myLetter(_char));
    }
    console.log(_arrOfLetter);
  }

  /**
   * @function 
   * Method that returns a string representing the word
   * A function that returns a string representing the word. This should call the function on 
   * @param {string} char 
   * @return {string}
   */
  getWord() {
    return 'word';
  }


  /**
   * @function checkLetter
   * @param {string} char 
   */
  checkLetter(char) {
    for (let _char of this.arrOfLetter) {
      _char.compareLetter(char);
    }
  }
  // Override inspect method to print without using template literals
  // font : https://nodejs.org/api/util.html#util_custom_inspection_functions_on_objects
  [inspect]() {
    return this.arrOfLetter.join('');
  }
}

///////////// test code \\\\\\\\\\\\\
let test = new Word(`test' test`);
console.log(test);
test.checkLetter('e');
// for(let c of test.arrOfLetter){
//   c.compareLetter('t');
// }
console.log(test);



// let w = "";

// for(let _c of test.arrOfLetter){
//   _c.guessed = true;
//   w +=`${_c} `
// }
// console.log(w);