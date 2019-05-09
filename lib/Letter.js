// Letter.js: Contains a class, Letter. This class should be able to either display an underlying character or 
// a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
// That means the class should define:
// - A string value to store the underlying character for the letter
// - A boolean value that stores whether that letter has been guessed yet
// - A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// - A function that takes a character as an argument and checks it against the underlying character,
// updating the stored boolean value to true if it was guessed correctly

/**
 * Letter.js: Contains a class, Letter.This class should be able to
 * either display an underlying character or a blank placeholder 
 * (such as an underscore), depending on whether or not the user has guessed the letter.
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
  /**
   * Method that takes a character as an argument and checks it against the underlying character,
   * updating the stored boolean value to true if it was guessed correctly
   * @param {string} character 
   */
  compareLetter(character) {
    this.guessed = this.character.toUpperCase() === character.toUpperCase();
  }
  /**
   * Method that returns the underlying character if the letter has been guessed,
   * or a placeholder (like an underscore) if the letter has not been guessed.
   * 
   * <br>
   * <strong style = 'color:orange; font-size:1.2rem;'> * * To work it must use</strong>
   * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals|Template literals}
   * 
   * <h4>Example:</h4>
   * <pre><code>
   *   var letter = new Leter('a');
   *   console.log(`${letter}`);
   * </code></pre>
   */
  toString() {
    return this.guessed ? this._char : "_";
  };
}

module.exports = Letter;
// test code \\
//let test = new Letter("A");
//console.log(`${test}`);
//test.guessed = true;
//console.log(`${test}`);