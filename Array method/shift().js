const arr = [1, 2, 3, 4, 5];
// Remove the first element from the array
const firstElement = arr.shift();
// Log the first element
console.log(firstElement); // 1
// Log the remaining elements in the array
console.log(arr); // [2, 3, 4, 5]

console.log('----------------------------');

const arr2 = [1, 2, 3, 4, 5];
// While there are still elements in the array, remove the first element and log it to the console
while (arr2.length) {
    const element = arr2.shift();
    console.log(element);
}
