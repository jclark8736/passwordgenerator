// Assignment Code  

// CODE SCAFFOLDING
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
    //all four selected
    if (numberIn && sCharIn && upperIn && lowerIn === true) {
        passConcat = numberArr.concat(specialCharArr, lowerCaseArr, upperCaseArr);
    }
    // three out of four selected (need four)
    else if (numberIn && upperIn && lowerIn === true) {
        passConcat = numberArr.concat(lowerCaseArr, upperCaseArr);
    }
    else if (numberIn && sCharIn && lowerIn === true) {
        passConcat = numberArr.concat(specialCharArr, lowerCaseArr);
    }
    else if (numberIn && sCharIn && upperIn === true) {
        passConcat = numberArr.concat(specialCharArr, upperCaseArr);
    }
    else if (sCharIn && upperIn && lowerIn === true) {
        passConcat = numberArr.concat(lowerCaseArr, upperCaseArr);
    }
    //there must be a better way of doing this
    //two options selected. need 6
    else if (numberIn && sCharIn === true) {
        passConcat = numberArr.concat(specialCharArr);
    }

    else if (numberIn && upperIn === true) {
        passConcat = numberArr.concat(upperCaseArr);
    }

    else if (numberIn && lowerIn === true) {
        passConcat = numberArr.concat(lowerCaseArr);
    }

    else if (sCharIn && upperIn === true) {
        passConcat = specialCharArr.concat(upperCaseArr);
    }

    else if (sCharIn && lowerIn === true) {
        passConcat = specialCharArr.concat(lowerCaseArr);
    }

    else if (upperIn && lowerIn === true) {
        passConcat = upperIn.concat(lowerCaseArr);
    }
    //single choice concatenations need four

    else if (numberIn === true) {
        passConcat = numberIn;
    }

    else if (sCharIn === true) {
        passConcat = scharIn;
    }

    else if (upperIn === true) {
        passConcat = upperIn;
    }

    else if (lowerIn === true) {
        passConcat = lowerCaseArr;
    }
    // passConcat now contains the selected characters
    //need to write a function that randomizes the selections and selects the correct number of chars
    // function = mkRandom
    //container for results of mkRandom = passRandom
    //not sure how to call on this properly
    // this code tells the machine how  many chars to select and then it will randomize
    // has to select a string based on length of parsed input length and must select fromm passConcat
    //inputLength randomly selecting from passConcat and dumping that in passRAndom!!!!!!!
    //!!!!! REFERENCE

    //function for getting a random element from an array
    function getRandomElement(arr) {
         var randIndex = Math.floor(Math.random() * arr.length);
         var randElement = arr[randIndex];
       
         return randElement;
       }
    
    //need to define randomizer first
    //passconCat randomly parsed by value of inputLength

    function passRandomizer () {
        
    }


    // for (var i = 0; i < inputLength.length; i++ ) {
    //     var passConcat = [Math.floor(Math.random() * passConcat.length)];
    //     var passwordFinal = passConcat[passRandom];
    //     return passwordFinal;

    // }
    //math.floor * math.random randomizes its selection by the number of characters within an array
    
    


    

}


//add listener and initialize button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passwordGen);

