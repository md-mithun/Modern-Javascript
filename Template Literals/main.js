
//Tagged template literals

function modifier(string, ...values) {
    // The `...values` parameter collects an indefinite number of arguments and returns them as an array.
    return string.reduce((prevValue, crrntValue) => {
        // The `reduce()` method iterates over the array of values and reduces them to a single value, using the provided callback function.
        // The callback function takes two arguments: the previous value and the current value.
        // The callback function returns the new previous value.

        return prevValue + crrntValue + ((values.length) ? values.shift() : '');
    }, '');
}

let name = 'Mithun';
let age = 20;

console.log(modifier`My name is ${name} and iam ${age} years old`);