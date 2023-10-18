// Array.prototype.reduce(functionName,initial value for total)
// total(Required)----------The initialValue, or the previously returned value of the function.
// currentValue(Required)---The value of the current element.
// currentIndex(Optional)---The index of the current element.
// arr(Optional)------------The array the current element belongs to.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = numbers.reduce((total, currentValue, curremtIndex, arr) => {
    return total + currentValue;
})
console.log(sum);