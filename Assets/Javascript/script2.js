
//placeholder password, user input and the variable to be concatenated

var userInput; 
var numberIn;
var sCharIn;
var upperIn;
var lowerIn;
var param;



//arrays to pull password from
//special char array

let specialCharArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


//number array 
let numberArr = [1,2,3,4,5,6,7,8,9];

//lowercase Array
let lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Upper Case array
let upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // .split will break up an array look up how to do it (from manoli (not used))

//code for the button to start the script
var initiate = document.querySelector("#generate")


//functions for generator!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function generatePassword () {
    var phPass = {};
      //create a variable to store password length
  //phPass = placeholder password
  var length = prompt(
    "Choose a number from 8-128 for your password");
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

    
    phPass.length = length
   
    var sCharIn = confirm("Would you like your password to have special characters?");
    
    if (SCharIn == true) { phPass.specialCharArr = specialCharArr

    }



}