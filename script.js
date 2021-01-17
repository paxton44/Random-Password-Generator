// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseLettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numericalCharsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var specialCharsArr = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]

var allCharacters = [];


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

  





}

function generatePassword() {
  //how many characters do you want?
  var passwordLength = window.prompt("How Many Characters Would You Like Your Password To Be? (Minimum 8 Characters Max 128 Characters)");

  passwordLength = JSON.parse(passwordLength);
  console.log(passwordLength);


  //validate gen password if pw length is less than 8 return 
  //and if its over 128 return 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid Password Length")
    return;
  }

  //would you like uppercase?
  var upperCase = confirm("Do You Want Uppercase Letters?")
  console.log(upperCase);
  if (upperCase) {
    allCharacters = allCharacters.concat(upperCaseLettersArr)
  }


  //would you like lowercase?
  var lowerCase = confirm("Do You Want Lowercase Letters?")
  console.log(lowerCase);
  if (lowerCase) {
    allCharacters = allCharacters.concat(lowerCaseLettersArr)
  }


  //would you like spec char?
  var specialCharacter = confirm("Do You Want Special Characters?")
  console.log(specialCharacter);
  if (specialCharacter) {
    allCharacters = allCharacters.concat(specialCharsArr)
  }

  //would you like numbers?

  var numerical = confirm("Do you want Numbers?")
  console.log(numerical);
  if (numerical) {
    allCharacters = allCharacters.concat(numericalCharsArr)
  }


  var tempPassWord
  for (var i = 0; i < passwordLength; i++) {
    tempPassWord = tempPassWord + allCharacters[(Math.floor(Math.random() * allCharacters.length))];




  }

  return tempPassWord;



}


generateBtn.addEventListener("click", writePassword);




// after looking at the deployed page I noticed; 
// 1.) button does not work
// 2.) looking in the console i found Uncaught ReferenceError: generatePassword is not defined
//     at HTMLButtonElement.writePassword (script.js:6)
//     therefore on jsline6 there is an error saying that the generate button isnt defined which 
//     probably means that it needs to have a home with the password characters inside it which should be an array 
//     
//     I need to define the array variables and then look them up in the console log 
//     I need to use a for loop maybe?
//     Or I need to use a function to generate the random password on the button click 
//
//     Maybe something along the lines of;
//     function writePassword() {
//     var length = 8-128; I dont know how to have a min of 8 as the beginning 
//     somehow define the alphabet using the array provided
//     then use for loop to run through the arrays "for (var i = 0; i < 5; i++) {
//     This is the block of code that will run each time
//     console.log("This is the current value of i: " + i + ".");"
//
//     
//
//
//
// 3.) const lowerCaseLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     const upperCaseLettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//     const numericalCharsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
//     const specialCharsArr = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"',  "'"]
//     classmate posted the alphabet to the class resources 










// ## Your Task

// This week’s homework requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

// The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

// ## User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```