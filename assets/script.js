// Creates the button variable to be used in the click listener.
var generateBtn = document.querySelector("#generate");
// Defining character objects. These objects contain all of the possible characters from which will choose our randomly generated password.
const characterUpper = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
  9: 'I',
  10: 'J',
  11: 'K',
  12: 'L',
  13: 'M',
  14: 'N',
  15: 'O',
  16: 'P',
  17: 'Q',
  18: 'R',
  19: 'S',
  20: 'T',
  21: 'U',
  22: 'V',
  23: 'W',
  24: 'X',
  25: 'Y',
  26: 'Z'
}

const characterLower = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
  10: 'j',
  11: 'k',
  12: 'l',
  13: 'm',
  14: 'n',
  15: 'o',
  16: 'p',
  17: 'q',
  18: 'r',
  19: 's',
  20: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z'
}

const characterNumber = {
  1: '0',
  2: '1',
  3: '2',
  4: '3',
  5: '4',
  6: '5',
  7: '6',
  8: '7',
  9: '8',
  10: '9'
}

const characterSpecial = {
  1: "\u0020",
  2: '\u0021',
  3: '\u0022',
  4: '\u0023',
  5: '\u0024',
  6: '\u0025',
  7: "\u0026",
  8: '\u0027',
  9: '\u0028',
  10: '\u0029',
  11: '\u002A',
  12: '\u002B',
  13: '\u002C',
  14: '\u002D',
  15: '\u002E',
  16: '\u002F',
  17: '\u003A',
  18: '\u003B',
  19: '\u003C',
  20: '\u003D',
  21: '\u003E',
  22: '\u003F',
  23: '\u0040',
  24: '\u005B',
  25: '\u005C',
  26: '\u005D',
  27: '\u005E',
  28: '\u005F',
  29: '\u0060',
  30: '\u007B',
  31: '\u007C',
  32: '\u007D',
  33: '\u007E'
}
let passwordLength = 12;
let selectUpper = false;
let selectLower = false;
let selectNumber = false;
let selectSpecial = false;

// Building an array that allows for the randomization process. It allows for a character set to be randomly selected.
let chooseCharacter = [];
function buildCharacterArray() {
  if (selectUpper) {
    chooseCharacter.push(characterUpper);
  }
  if (selectLower) {
    chooseCharacter.push(characterLower);
  }
  if (selectNumber) {
    chooseCharacter.push(characterNumber);
  }
  if (selectSpecial) {
    chooseCharacter.push(characterSpecial);
  }
}
  // Defining the password variable outside of the iteration to keep changes made to it.
let password = "";

// Function for writing the password.
function writePassword() {
  // Collecting desired length from the user. If character length is acceptable they will be allowed through to character selection.
  passwordLength = prompt("Enter desired password length (8-128 characters).");
  // Confirming password length.
  if ((8 <= passwordLength) && (passwordLength <= 128)) {
    // Collecting desired character types to include.
    selectUpper = confirm("Include upper case?");
    selectLower = confirm("Include lower case?");
    selectNumber = confirm("Include numbers?");
    selectSpecial = confirm("Include special characters?");
    // Calling build character array function (see above).
    buildCharacterArray();
    // Validating character selection.
    if (selectUpper === true || selectLower === true || selectNumber === true || selectSpecial === true) {
      console.log("characters approved");
      let i;
      // Iterating the password generation based on the password length specified by the user.
      for (i=0; i < passwordLength; i++) {
        // This randomly assigns a character set from which to select the ith character.
        let randomCharacterSet = (chooseCharacter[(Math.floor(Math.random() * chooseCharacter.length))]);
        // This creates a multiplier variable based on the randomly selected character set. This will be used when randomizing on each iteration.
        let setMultiplier = "";
        if (randomCharacterSet === characterUpper || randomCharacterSet === characterLower) {
          setMultiplier = 26;
        } else if (randomCharacterSet === characterNumber) {
          setMultiplier = 10;
        } else if (randomCharacterSet === characterSpecial) {
          setMultiplier = 33;
        } else {
          console.log("error");
        }
        // Writing to the password variable. The iterative process selects and writes a random character from a random character set each time through.
        password += randomCharacterSet[(1 + (Math.floor(Math.random() * setMultiplier)))];
      }
      }else {
      console.log("password criteria rejected");
      alert("You must select characters for the password.");
    }
    } else {
      alert("Please select a valid password length.");
      console.log("Please select a valid password length.");
    }
  // Printing generated password to user's display.
  document.getElementById("password").innerHTML = "Your password is: " + password;
  // Resetting the variables to be used in creating another password.
  chooseCharacter = [];
  password = "";
}
generateBtn.addEventListener("click", writePassword);

