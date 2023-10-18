//Array.prototype.find()
// The findIndex() method is a JavaScript function that returns the index of the first element in an array that satisfies a given testing function. If no elements satisfy the testing function, findIndex() returns -1.

let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let result = array.findIndex((currentValue, CurrentIndex, arr) => {
    return currentValue == 'd';
})
console.log('index of g is ' + result);