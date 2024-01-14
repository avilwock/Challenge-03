// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var input = ""
var randomPassword = ""


generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  var passLength = prompt("Please enter desired number of characters between 8 and 128");

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Error - Please Enter a Number between 8 and 128");
    return
  }

  var lowercaseOption = confirm("Include lowercase letters?");
  console.log(lowercaseOption)

 
  var uppercaseOption = confirm("Include uppercase letters?");
  console.log(uppercaseOption)
 
  var numberConfirm = confirm("Include numbers?");
  console.log(numberConfirm)
 
  var specialConfirm = confirm("Include special characters?");
  console.log(specialConfirm)

  if (lowercaseOption !=true && uppercaseOption != true && numberConfirm !=true && specialConfirm !=true) {
    alert ("Please choose at least one type of character");
    return;
  }


  var randomPassword = ""
 

  const passwordLength = parseInt(passLength)
//
  
  for (var i = 0; i < passwordLength; i++) {
    input [
      Math.floor(Math.random() * input.length)];

      randomPassword = input [
        Math.floor(Math.random() * input.length)];
}
 
  // Add event listener to generate button

return randomPassword;
}






//
//
//function generatePassword() {
 // var password='';
 // return "password";
//}

// 
//
 //   return
//  }
//  console.log(input);
//}