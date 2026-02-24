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
console.log(countWords("Hello world!"));



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

