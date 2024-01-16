# Password Generator

## Description

This project focuses on generating Javascript code to utilize a password generator. This project had several requirements for usage in order to create strong passwords tht provide a great deal of security.

The specific requirements for this password generator were that, upon the click of a button, a series of prompts were presented in order to generate a password that met certain criteria:

        *Must have a password of a length between 8 and 128 characters.
        *Must prompt for the selection of lowercase, uppercase, numerical, and/or special characters.
        *If none of the selections above have been made, then an error message will appear.
        *A password must be generated with the previous criteria met.

The HTML and CSS were provided for this challenge, and some basic code for the password input.

In order to create this project, several strings of information were placed into variables and  if statements were created with prompts asking for confirmation on whether or not to include specific character types, and then the information was used to randomly generate a password.

In this project I generated an if statement that ensured if a number was entered that was below 8 characters, above 128 characters, or contained something other than a number, an alert would request a new entry within the parameters listed.

Four different prompts were created, each asking about whether or not certain factors were necessary for password generation. If no options were selected, an alert requested that at least one type of character was selected for the password.

Tests were done to ensure that all prompts led to a password generation with the specific necessary criteria.

The variables for the generated password and input were also cleared each time on click so that the textbox cleared each use, and previous prompts were ignored.

For future ammendments to this project, I recommend a copy button to copy and paste the password quickly.

## Access

To access this site, please visit: https://avilwock.github.io/Challenge-03/

## Usage

To use this document, press the red "Generate Password" button at the bottom of the form. An alert box will appear at the top of the screen and give several prompts. Answer all of the prompts in order to generate a password into the "Your Secure Password" box.

![Alt text](assets/images/03-javascript-homework-demo.png)

## Credits
With thanks to:

https://www.ionos.com/digitalguide/websites/web-development/readme-file/#:~:text=You%20can%20create%20bullet%20points,the%20beginning%20of%20the%20line.

https://www.geeksforgeeks.org/what-is-the-difference-between-unshift-and-push-method-in-javascript/

https://stackoverflow.com/questions/64378165/why-is-my-password-returning-as-undefined

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

https://owasp.org/www-community/password-special-characters

Logan Garland, Coding Bootcamp, University of Irvine California

## License
MIT License