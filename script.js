// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// ----generate a prompt        prompt()
// ----prompt will ask length of pw 8-128
// ----prompts for upper/lower/numbers/special
//  -?-user must select at least 1 prompt
// -?- return info and send to generate pw

// var characters = ["qwertyuiopasdfghjklzxcvbnm", "QWERTYUIOPASDFGHJKLZXCVBNM", "123456789", "!@#$&()<>"]

function passwordPrompt() {
     var length = prompt("How many characters? Min 8 Max 128", "enter here");

       if (length < 8 || length > 128 || length != "number") {
         //alert("Invalid Response");
        
       } 
         var lower = confirm("lowercase characters?");
         var upper = confirm("UPPERCASE CHARACTERS?");
         var numeric = confirm("123456789?");
         var special = confirm("!@#$&()<>");
         //var create = createPassword(lower, upper, numeric, special)  
  }
// length x createPassword....?
passwordPrompt()



// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

