// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(!password) return
  passwordText.value = password;
}

let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let special = "!@#$%^&*()_+-=[]{}';/.,<>:|"

function generatePassword() {
    let PasswordCharacters = ""
    let Password = ""

    let PasswordSize = prompt("How long would you like your password to be?", "")
    if(!PasswordSize) return

    // Making sure the number is entered
    if(isNaN(PasswordSize)) {
      alert("Please only enter a number.")
      return
    }
    
    // Making sure the password is at least 8 characters long
    if(PasswordSize < 8) {
      alert("The password must be at least 8 characters.")
      return
    }

    // Making sure the password is above 128 characters long
    if(PasswordSize > 128) {
      alert("The password may not be longer than 128 characters.")
      return
    }

    // Lowercase characters alert
    let LowercaseAnswer = confirm("Would you like lowercase characters?")
    if(LowercaseAnswer) PasswordCharacters += lowercase
    
    // Uppcase characters alert
    let UppercaseAnswer = confirm("Would you like uppercase characters?")
    if(UppercaseAnswer) PasswordCharacters += uppercase
    
    //Numeric characters alert
    let NumberAnswer = confirm("Would you like Numeric characters?")
    if(NumberAnswer) PasswordCharacters += numbers

    //Special Characters alert
    let SpecialAnswer = confirm("Would you like special characters?")
    if(SpecialAnswer) PasswordCharacters += special
    
    // Making sure for atleast one character type 
    if(PasswordCharacters.length == 0) {
      alert("You must approve at least one character type.")
      return
    }

    // Generating Password
    while(Password.length < PasswordSize) {
      Password += PasswordCharacters.charAt(Math.floor(Math.random() * PasswordCharacters.length));
    }

    return Password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);