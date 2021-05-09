// Assignment Code

const generateBtn

// CODE SCAFFOLDING FROM MANOLI
//Making input vars global
var phPass;
var numberIn;
var sCharIn;
var upperIn;
var lowerIn;
var selection


//arrays to pull password from
//special char array

var specialCharArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


//number array 
var numberArr = [1,2,3,4,5,6,7,8,9];

//lowercase Array
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Upper Case array
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // .split will break up an array look up how to do it (from manoli (not used))


//END ARRAY

//function to prompt user for password options
function getPassword() {
  var phPass = {};
  //create a variable to store password length
  //phPass = placeholder password
  var length = prompt(
    "Choose a number from 8-128 for your password"
  );
  length = parseInt(length);
  
  //create conditional statement to check if password length is actually a number
  if (Number.isNan(length)) {
    alert ('password must be a number');
    return null;
  };
  //conditional statement to check if password is at least 8 chars
  if (length < 8 || length > 128) {
    alert('Password length must be AT LEAST 8 characters and LESS than 128 characters');
    return null;
    }

    //user inputs here
    else {
      numberIn = confirm("Will your password contain numbers?")
      sCharIn = confirm("Will your password contain special characters?")
      upperIn = confirm("Will your password contain uppercase letters?")
      lowerIn = confirm("Will your password contain lowercase letters?")
    };



  }; 
  

  

  //not sure about phPass and length right here, possible debug
  phPass.length = length

  //prompts to determine password parameters



};


//MANOLI NOTES
//this stuff all needs to be in the main function
//create a confirmation prompt  for type of chars
//need to create conditional statement that checks if user included at least 1 of the char types.return user to start
//var possiblePass = {
//we need to store length and all characters selected by users
//length:length
//specialChars:specialChars
//}
//return possiblePass;

//create a function for getting a random element from an array
function getRandomLetters(array) {
  var random = //array.length randomizer has to have an equation
  var rand = arr[random]
  return rand;
}


//create a function to generate a password with the user input
function generatorPassword() {
//set a variable to call getPassword
var options = getPassword();

//variable to store the password as it is being concatenated
//password will be stored as an array
var passResult = [];

//create a variable to store the types of chars to include into the password
var possibleChars = [];

//create a variable to store each type of guaranteed chars
var guarChars = [];

//write a condition that adds the array of special chars into the array of possible chars 
//based on user inputs; then push the new random chars into the guaranteed chars

// LOOK UP HOW TO PUSH AND CONCAT REQUIRED FOR THIS ASSIGNMENT

//example
if (options.specialChars) {
  possibleChars = possibleChars .amethodwouldgohereconcatenate(specialChars);
  guarChars.push(getRandomLetters(specialCharsormaybepossibleChars));
}


//create a for loop that iterates over the password length, from the options object
for (var i = 0; i < options.length; i++) {
  var possibleCharacter = getRandomLetters(possibleChars):
  passResult.push(possibleCharacter)

}
return passResult.join('')


}

//then save to a variable

  



//END CODE FROM MANOLI

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
