// Assignment Code
var generateBtn = document.querySelector("#generate");
// Character objects
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

let selectUpper = true;
let selectLower = true;
let selectNumber = true;
let selectSpecial = true;
let passwordLength = 12;

// Write password to the #password input
function writePassword() {
  //var password = generatePassword() 
     //var passwordText = document.querySelector("#password");
  document.getElementById("password").innerHTML = "Your password is: " + (1 + (Math.floor(Math.random() * 26)));
  if (selectUpper === true || selectLower === true || selectNumber === true || selectSpecial === true) {
    console.log("characters approved");
    let approval1 = true;
    if (approval1 === true && (8 <= passwordLength) && (passwordLength <= 128)) {
      console.log("length approved");
    }else {
      console.log("length rejected");
    }
  }else {
    console.log("password criteria rejected");
  }
  }
//passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

