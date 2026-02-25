// 1. Write a function named findMax that takes an array of numbers and returns the largest number from the array.

function findMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([3, 5, 7, 2, 8]));



// 2. Write a function named countWords that takes a string and returns the number of words in the string.

function countWords(str) {
  if (str.trim() === "") {
    return 0;
  }
  const words = str.trim().split(" ");
  return words.length;
}
console.log(countWords("I am learning JavaScript functions."));



// 3. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(a, b) {
  return a - b;
}
console.log(calculateDifference(10, 3));



// 4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));



// 5. Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(sortArrayDescending([3, 1, 4, 1, 5, 9, 2, 6]));



// 6. Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  return false;
}
console.log(isLeapYear(2020));


// 7. Write a function named reverseString that takes a string and returns the reversed version of that string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("JavaScript"));



// 8. Write a function named sumArray that takes an array of numbers and returns the total sum of all elements.
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));