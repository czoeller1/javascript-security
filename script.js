// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var pass = "";
  var passLen = passLength();
  var dict = criteria();

  //runs passLen times
  for (var i = 0; i < passLen; i++) {
    var n = Math.floor(Math.random() * dict.length); //selects an index from the length of the character dictionary
    pass += dict.substr(n, 1); //adds the randomly selected character to the end of the partial password
  }
  return pass;
}

//Prompts the user for a password length
//If the length isn't in the given range or isnt a number it prompts the user to try again
function passLength() {
  var passLen = prompt(
    "How many characters long should the password be? (8-128)",
    "8"
  );
  passLen = Number(passLen);

  //checks user input matches criteria
  if (passLen < 8 || passLen > 128 || isNaN(passLen)) {
    alert("Enter a number between 8 and 128");
    passLen = passLength();
  }
  return passLen;
}

//Polls the user for password criteria. Builds a dictionary of possible characters based on that input
//Prompts the user to select at least one type if they don't select any
function criteria() {
  var dict = "";
  var upper = confirm("Should the password have uppercase letters?");
  var lower = confirm("Should the password have lowercase letters?");
  var num = confirm("Should the password have numbers?");
  var spec = confirm("Should the password have special characters?");
  if (upper) {
    dict += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lower) {
    dict += "abcdefghijklmnopqrstuvwxyz";
  }
  if (num) {
    dict += "0123456789";
  }
  if (spec) {
    dict += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  if (dict.length == "".length) {
    alert("You must select at least one character type");
    dict = criteria();
  }
  return dict;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
