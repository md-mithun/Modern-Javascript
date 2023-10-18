//Array.prototype.splice()

// The splice() method takes three arguments:

// 1.A start index, which is the index of the first element to remove or replace.
// 2.A deleteCount, which is the number of elements to remove.
// 3.An optional item1, item2, ..., itemN, which are the new elements to add to the array.

const numbers = [1, 2, 3, 4, 5];
// Remove the first two elements from the array.
const removedElements = numbers.splice(0, 2);
console.log(removedElements); // logs [1, 2] returned removed elements
// Add the number 6 to the end of the array.
numbers.splice(5, 0, 6);
console.log(numbers); // logs [3, 4, 5, 6]
