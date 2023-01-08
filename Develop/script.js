// Assignment code here
//var allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&+-*/^";
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var special = ['!','@','#','$','%','&','+','-','*','/','^'];
var number = [0,1,2,3,4,5,6,7,8,9];
var userPreference = []; //added userPreference and password var here so generatePassword() can get values from initQuestions
var password;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  //added valid Promt to prevent if 
  if (initQuestions (true)){
    var password = generatePassword();
    passwordText.value = password;
    } 
}




//I need to ask questions to determine the type of the password. a function to hold all questions would make it easy to follow.
function initQuestions() {
  passwordLength = +prompt("How many characters would you like for the password? Choose Between 8 to 128."); //having + before prompt will change it to number from string.
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    alert("Please enter a valid number between 8 to 128");
    return false;
  } // if invalid value entered, return
  
  userPreference =[];
  var hasLowerCase = confirm ("Do you want to include lowercase?");
  var hasUpperCase = confirm ("Do you want to include uppercase?");
  var hasSpecial = confirm ("Do you want to include special characters?");
  var hasNumber = confirm ("Do you want to include numbers?");

  if (hasLowerCase + hasUpperCase + hasSpecial + hasNumber == 0){
    alert("Please select at least one character type.");
    return false;             // user needs to select at least one character type.
  } else {
    //now, add choices to the empty user preference array when they are chosen.
    if(hasLowerCase){
      userPreference = userPreference.concat(lowerCase);
    }
    if(hasUpperCase){
      userPreference = userPreference.concat(upperCase);
    }
    if(hasSpecial){
      userPreference = userPreference.concat(special);
    }
    if(hasNumber){
      userPreference = userPreference.concat(number);
    } 
  return true;
  }
}

function generatePassword() {
  var randomPassword = "";
  for (var i = 0; i < passwordLength; i++){
    randomPassword += userPreference[Math.floor(Math.random() * userPreference.length)];
  } 
  
  return randomPassword;
}



