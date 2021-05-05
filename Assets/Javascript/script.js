// Assignment Code

// CODE SCAFFOLDING FROM MANOLI

//special char array

var specialChars = []


//number array 
var numbArray = []

//lowercase Array
var lowerCase = []

//Upper Case array
var upperCase = [].split() // .split will break up an array look up how to do it (from manoli)
//END ARRAY

//function to prompt user for password options
function getPassword() {
  //create a variable to store password length
  var length = parseInt (
    prompt ('How many characters would you like your password to be?')
  )
  //create conditional statement to check if password length is actually a number
  if (Number.isNan(length)) {
    allert ('password must be a number');
    return null;
  };
  //conditional statement to check if password is at least 8 chars
  if (length < 8) {
    alert('Password length must be AT LEAST 8 characters');
    return null;
  };
  //conditional statement to check if password length is at least 128 chars
  if (length > 128) {
    alert('Password length cannot exceed 128 characters');
  };
}

//create a confirmation prompt  for type of chars
//need to create conditional statement that checks if user included at least 1 of the char types.return user to start





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
