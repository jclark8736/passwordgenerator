// Assignment Code  

// CODE SCAFFOLDING FROM MANOLI
//Making input vars global

//placeholder password to hold concatenation
var passConcat;
//number selection
var numberIn;
//special char selection
var sCharIn;
//uppercase selection
var upperIn;
//lowercase selection
var lowerIn;
//chars from 8-128
var inputLength

// END USER DEFINED VARS

//arrays to pull password from
//special char array

var specialCharArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


//number array 
var numberArr = [1,2,3,4,5,6,7,8,9];

//lowercase Array
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Upper Case array
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // .split will break up an array look up how to do it (from manoli (not used))


//END ARRAYS

function passwordGen() {
    inputLength = parseInt(prompt("Choose a number between 8 and 128"));
    //check user input on length
    if (inputLength < 8) {
        alert("Your password must have at least 8 characters");
        return null;
    }
    else if (inputLength > 128) {
        alert("Your password must have less than 128 characters");
        return null;
    }
    //user selections on variables
    else {
        numberIn = confirm("Should this password contain numbers?");
        sCharIn = confirm("Should this password contain special characters? ex. !@#$");
        upperIn = confirm("Should this password contain uppercase letters?");
        lowerIn = confirm("Should this password contain lowercase letters?");
        

    };
    //logic to begin forming the passConcat array
    //need 15
    if (numberIn && sCharIn && upperIn && lowerIn == true) {
        passConcat = numberArr.concat(specialCharArr, lowerCaseArr, upperCaseArr)
    }




}
