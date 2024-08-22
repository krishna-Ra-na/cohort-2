/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  const cleanedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\s]/g, "");
  console.log(cleanedStr);
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
// console.log(isPalindrome("Eva, can I see bees in a cave?"));
module.exports = isPalindrome;
