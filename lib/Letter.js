// Letter.js: Contains a class, Letter. This class should be able to either display an underlying character or 
// a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
// That means the class should define:
// - A string value to store the underlying character for the letter
// - A boolean value that stores whether that letter has been guessed yet
// - A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// - A function that takes a character as an argument and checks it against the underlying character,
// updating the stored boolean value to true if it was guessed correctly

/** 
 * 
*/
class Letter {
  /**
   * Represents a Letter
   * @constructor
   * @param {string} character 
   */
  constructor(character) {
    this._char = character;
    this.guessed = false;
  }
  compareLetter(character) {
    this.guessed = this.character.toUpperCase() === character.toUpperCase();
  }

  toString() {
    return this.guessed ? this._char : "_";
  };
}

// test code \\

let test = new Letter("A");
console.log(`${test}`);

test.guessed = true;
console.log(`${test}`);