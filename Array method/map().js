//Array.prototype.slice()
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => {
    return number * number
}, this);
console.log(squaredNumbers); // logs [1, 4, 9, 16, 25]
