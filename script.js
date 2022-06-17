
var upperArray = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowerArray = "qwertyuiopasdfghjklzxcvbnm"
var numberArray = "123456789"
var specialArray = "!@#$&()<>"





function generatePassword() {
   var length = prompt("How many characters? \nMin 8 Max 128", "enter here")   
     if (length < 8 || length > 128 ){
     alert("invalid response");
     return;
     }        
 

     var lower = confirm("lowercase characters? \nqwerty");
     var upper = confirm("UPPERCASE CHARACTERS? \nQWERTY");
     var numeric = confirm("123456789?");
     var special = confirm("!@#$&()<>");

     if (!lower && !upper && !numeric && !special) {
         alert("invalid response");
         return;
     }
    

     if (lower) {
        lower = true

     }
     
     if (upper) {
        upper = true

     }

     if(numeric) {
        numeric = true

     }

     if (special) {
        special = true

     }

        // var create = createPassword(lower, upper, numeric, special)  
};


generatePassword()

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

