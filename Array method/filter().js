//Array.prototype.filter()
// The filter() method is a JavaScript array method that creates a new array with all the elements that pass the test implemented by the provided function

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArray = array.filter((currentValue, CurrentIndex, arr) => {
    return currentValue % 2 == 0;
},this)
console.log(array);
console.log(evenArray);