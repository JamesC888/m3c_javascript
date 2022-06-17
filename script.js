
var upperArray = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowerArray = "qwertyuiopasdfghjklzxcvbnm"
var numberArray = "123456789"
var specialArray = "!@#$&()<>"
var passwordLength = 8

var createPassword = ""
var password = ""


function generatePassword() {
   var passwordLength = prompt("How many characters? \nMin 8 Max 128", "enter here")   
     if (passwordLength < 8 || passwordLength > 128 ){
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
     };
    

     if (lower) {
        createPassword += lowerArray;

     };
     
     if (upper) {
        creatPassword += upperArray;

     };

     if(numeric) {
        createPassowrd += numberArray;

     };

     if (special) {
        createPassword += specialArray;

     };

    for (i = 0; i < length; i++) {
      var randomPass = Math.floor(Math.random() * passwordLength.length);
      var genPass = createPassword[randomPass, randomPass +1];
      password = genPass;
      
   };  
      return;

   };

document.getElementById("password")



// // Assignment Code
 var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

 }

// // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

