//Array.prototype.slice()
// The slice() method is a JavaScript array method that returns a new array containing a portion of the original array. The slice() method takes two arguments:
// A start index, which is the index of the first element to include in the new array.
// An end index, which is the index of the first element to exclude from the new array.

const numbers = [1, 2, 3, 4, 5];

// Slice the first two elements from the array.
const firstTwoNumbers = numbers.slice(0, 2);

console.log(firstTwoNumbers); // logs [1, 2]

// Slice the last two elements from the array.
const lastTwoNumbers = numbers.slice(3, 5);

console.log(lastTwoNumbers); // logs [4, 5]

// Slice the array from the last 2nd element to the fifth element (exclusive).
const middleTwoNumbers = numbers.slice(-2, 5);

console.log(middleTwoNumbers); // logs [4, 5]
