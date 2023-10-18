
// Arrow functions and normal functions are both ways to define functions in JavaScript. However, there are some key differences between the two:
// Syntax:
// ## Arrow functions	(parameters) => expression
// ## Normal functions function functionName(parameters) { ... }
// function number(n){
//     return n;
// }
// let number = n => {
//     return n;
// }
// let number = (n) => {
//     return n;
// }
// let number = n => n;
// console.log(number(10))


// this:
// Normal functions have their own dynamic this value, which is determined by how the function is called.
// Arrow functions do not have their own this value. Instead, they lexically bind the this value from the surrounding scope. This means that the this value inside an arrow function is always the same as the this value in the surrounding scope.

const languages = {
    name: 'Javascript',
    library: ['angular', 'react', 'vue', 'jquery'],
    display: function () {
        // this.library.forEach(function (x) {
        //     console.log(`${this.name} love ${x}`);//here 'this' is main window object
        // })
        this.library.forEach((x) => {
            console.log(`${this.name} love ${x}`) //here 'this' is languages object
        })
    }
}
languages.display();

// Constructibility:
// ## Arrow functions cannot be used as constructors.
// ## Normal functions can be used as constructors.

// Hoisting:
// ## Arrow functions are not hoisted, which means that they must be declared before they are used.
// ## Normal functions are hoisted, which means that they can be used before they are declared.
