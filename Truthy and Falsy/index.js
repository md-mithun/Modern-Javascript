//## Truthy values
if (1) {
    console.log('The value 1 is truthy.');
} // logs 'The value 1 is truthy.'

if ('hello') {
    console.log('The string "hello" is truthy.');
} // logs 'The string "hello" is truthy.'

if ([]) {
    console.log('The empty array [] is truthy.');
} // logs 'The empty array [] is truthy.'

if ({}) {
    console.log('The empty object {} is truthy.');
} // logs 'The empty object {} is truthy.'

//## Falsy values
if (false) {
    console.log('The value false is falsy.');
} // does not log anything

if ('') {
    console.log('The empty string is falsy.');
} // does not log anything

if (0) {
    console.log('The value 0 is falsy.');
} // does not log anything

if (NaN) {
    console.log('The value NaN is falsy.');
} // does not log anything

if (null) {
    console.log('The value null is falsy.');
} // does not log anything

if (undefined) {
    console.log('The value undefined is falsy.');
} // does not log anything
