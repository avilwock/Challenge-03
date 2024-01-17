//This creates a variable to connect to the id to generate from the HTML document
var generateBtn = document.querySelector("#generate");

//This sets up the variable generateBtn to write a password upon click
generateBtn.addEventListener("click", writePassword);

//This function is used to create a password, connecting to the password id in the HTML
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//This function is used to generate the password
function generatePassword() {
  //This variable creates an uppercase array of the alphabet
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //This variable creates a lowercase array of the alphabet
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  //This variable creates an array of the numbers 0 through 9
  var number = "0123456789";
  //This variable creates an array of special characters commonly found in passwords
  var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  //This variable sets the randomPassword output to a string
  randomPassword = "";
  //This variable sets the input output to a string
  input = [""];
  //This creates a prompt to enter a number between 8 and 128
  var passLength = prompt("Please enter desired number of characters between 8 and 128");

  //This if statement ensures that a password is betwen 8 and 128 characters and is a number
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Error - Please Enter a Number between 8 and 128");
    return;
  }
  //This variable confirms whether or not a lowercase will be used, and if so, uses letters
  //in the lowercase variable at random in the password
  var lowercaseOption = confirm("Include lowercase letters?");
  if (lowercaseOption === true) {
    for (var i = 0; i < lowercase.length; i++) {
      input.unshift(lowercase[i]);
    }
    //Logs the input in the console
    console.log(input[i]);
    }

  //This variable confirms whether or not an uppercase will be used, and if so, uses letters
  // in the uppercase variable at random in the password
  var uppercaseOption = confirm("Include uppercase letters?");
  if (uppercaseOption === true) {
    for (var i = 0; i < uppercase.length; i++) {
      input.unshift(uppercase[i]);
    }
    //Logs the input in the console
    console.log(input[i]);
    }

  //This variable confirms whether or not a number will be used, and if so, uses letters
  //in the number variable at random in the password
  var numberConfirm = confirm("Include numbers?");
  if (numberConfirm === true) {
    for (var i = 0; i < number.length; i++) {
      input.unshift(number[i]);
    }
    //Logs the input in the console
    console.log(input[i])
    }
  
  //This variable confirms whether or not a special character will be used, and if so, uses letters
  //in the number variable at random in the password
  var specialConfirm = confirm("Include special characters?");
  if (specialConfirm === true) {
    for (var i = 0; i < specialChar.length; i++) {
      input.unshift(specialChar[i]);
    }
    //Logs the input in the console
    console.log(input[i])
    }

  //This if statement creates an alert if no variables are selected to rerun the program and select
  //at least one type of character for the passwrod
  if (lowercaseOption !=true && uppercaseOption !=true && numberConfirm !=true && specialConfirm !=true) {
    alert ("Please choose at least one type of character");
    return;
  }
  //This const converts a string into an integer, and ensures that the variable type does not change
  const confirmLength = parseInt(passLength)

  //This ensures that the input number for the password length generates a password with the parameters
  //selected in the prompts, and randomly selects letters, numbers, and characters, to create a pasword
  for (var i = 0; i < confirmLength; i++) {
    input[ 
      Math.floor(Math.random() * input.length)];

      randomPassword += input [
        Math.floor(Math.random() * input.length)];
  }

//This returns and logs a random password in the text box
return randomPassword
}
