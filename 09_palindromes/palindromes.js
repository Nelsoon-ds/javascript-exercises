const reverseString = require("../03_reverseString/reverseString");

const palindromes = function (string) {
  // It should take the strings letters
  // from behind a store it in a variable
  const validChars = /[^a-zA-Z0-9]/g;
  cleanString = string.toLowerCase().trim().replace(validChars, "");
  console.log(cleanString);
  reversedString = cleanString.split("").reverse().join("");
  console.log(reversedString);

  if (reversedString === cleanString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
