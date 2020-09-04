// array of special characters
var specialCharacters = ["!@#$%^&*()<>{},."];
var ar = specialCharacters.split('');
// array of number characters 
var numericCharacters = ["012345679"];
var ar = numericCharacters.split('');
// array lowercase characters
var lowerCaseCharacters = ["abcdefghijklmnopqrstuvwxyz"];
var arr = lowerCaseCharacters.split('');
// array uppercase characters
var upperCaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var arrr = upperCaseCharacters.split('');
var passwordLength = "";

alert("Password must be between 8 and 128 characters");

// blank array to store user input for password character options
var passwordOptions = [ ];
function getPasswordOptions() {
  length = parseInt(
    prompt("how many characters do you want your password to contain?")
  );

  // booleans to store answers from the user
  var specialCharacters = confirm(
  "will your password include a special character?");
  var upperCaseCharacters = confirm(
  "will your password include uppercase characters?");
  var lowerCaseCharacters = confirm(
  "will your password include lowercase characters?");
  var numericCharacters = confirm(
  "will your password contain numbers?");

  //conditional including length of pw and character selection
  if (passwordLength >= 8 && length <= 128) {
    var passwordOptions = {
      passwordLength: length,
      specialCharacters: specialCharacters,
      upperCaseCharacters: upperCaseCharacters,
      lowerCaseCharacters: lowerCaseCharacters,
      numericCharacters: numericCharacters,
    };
  } else {
    alert("password must be between 8 and 128 characters");
  }
  return passwordOptions;
}
function getRandomElementfromArray(arr) {
  var arrayKey = Math.floor(Math.random() * arr.length + 1);
  return arr[arrayKey];
}
//function to generate password with open array for input
function generatePassword() {
  var password = "";
  var options = getPasswordOptions();
  console.log(options);
// object for available characters to input into password
  var availableCharacterTypes = [
    specialCharacters,
    numericCharacters,
    lowerCaseCharacters,
    upperCaseCharacters
  ];
  // available character types & filling in open variable
  var availableCharacterTypes = [];
  if (specialCharacters) {
    for (var i = 0; i < specialCharacters.length; i++);
    { availableCharacterTypes += specialCharacters;
    }
  }
  if (options.upperCaseCharacters) {
    for (var i = 0; i < upperCaseCharacters.length; i++);
    { availableCharacterTypes += upperCaseCharacters;
    }
  }
  if (options.lowerCaseCharacters) {
    for (var i = 0; i < lowerCaseCharacters.length; i++);
    {
      availableCharacterTypes += lowerCaseCharacters;
    }
  }
  if (options.numericCharacters) {
    for (var i = 0; i < numericCharacters.length; i++);
    {
      availableCharacterTypes += numericCharacters;
    }
  }

  for (var i = 0; i <= options.length; i++) {
    password += getRandomElementfromArray(availableCharacterTypes);
  };
  return password;
}

function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);