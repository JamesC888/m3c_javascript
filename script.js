var password = document.getElementById("password");

var generateBtn = document.querySelector("#generate");

function generatePassword() {
   var lowerArray = "qwertyuiopasdfghjklzxcvbnm";
   var upperArray = "QWERTYUIOPASDFGHJKLZXCVBNM";
   var numericArray = "123456789";
   var specialArray = "!@#$&()<>";
      
   var password = "";
   var create = "";
      
   var passwordLength = prompt("How many characters? \nMin 8 Max 128", "enter here");   
   if (passwordLength < 8 || passwordLength > 128 ) {
      alert("invalid response");
      
   };  
   
   var lower = confirm("lowercase characters? \nqwerty");
   var upper = confirm("UPPERCASE CHARACTERS? \nQWERTY");
   var numeric = confirm("Numbers? \n123456789");
   var special = confirm("Special characters? \n!@#$&()<>");
      
   if (!lower && !upper && !numeric && !special) {
      alert("invalid response");
            
   };
   if (lower) {
      create += lowerArray;
   };      
   if (upper) {
      create += upperArray;
   };
   if(numeric) {
      create += numericArray;
   };
   if (special) {
      create += specialArray;
   };
               
   for ( i = 0; i < passwordLength; i++) {
      var randomPass = Math.floor(Math.random() * create.length);
      var choice = create.substring(randomPass, randomPass +1);
      password += choice
   };  return password
 };
   
      
   function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
            
      passwordText.value = password;
   }
   
generateBtn.addEventListener("click", writePassword);