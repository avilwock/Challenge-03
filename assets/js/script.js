var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var input = [""];
var randomPassword = '';


generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  randomPassword = "";
  input = [""];
  var passLength = prompt("Please enter desired number of characters between 8 and 128");

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Error - Please Enter a Number between 8 and 128");
    return;
  }

  var lowercaseOption = confirm("Include lowercase letters?");
  if (lowercaseOption === true) {
    for (var i = 0; i < lowercase.length; i++) {
      input.unshift(lowercase[i]);
    }
    console.log(input[i]);
    }

  var uppercaseOption = confirm("Include uppercase letters?");
  if (uppercaseOption === true) {
    for (var i = 0; i < uppercase.length; i++) {
      input.unshift(uppercase[i]);
    }
    console.log(input[i]);
    }

  var numberConfirm = confirm("Include numbers?");
  if (numberConfirm === true) {
    for (var i = 0; i < number.length; i++) {
      input.unshift(number[i]);
    }
  console.log(input[i])
  }
  
  var specialConfirm = confirm("Include special characters?");
  if (specialConfirm === true) {
    for (var i = 0; i < specialChar.length; i++) {
      input.unshift(specialChar[i]);
    }
  console.log(input[i])
  }

  if (lowercaseOption !=true && uppercaseOption !=true && numberConfirm !=true && specialConfirm !=true) {
    alert ("Please choose at least one type of character");
    return;
  }

  const confirmLength = parseInt(passLength)

  for (var i = 0; i < confirmLength; i++) {
    input[ 
      Math.floor(Math.random() * input.length)];

      randomPassword += input [
        Math.floor(Math.random() * input.length)];
  }

return randomPassword
}
