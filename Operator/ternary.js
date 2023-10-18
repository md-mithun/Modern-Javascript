let age = 21;
// //Without ternary 
// if (age > 18) {
//     if (age > 60) {
//         type = 'old'
//     } else {
//         type = 'young'
//     }
// } else {
//     type = 'child'
// }
// console.log(type);

// with ternary operator
type = (age < 18) ? 'child' : (age > 60) ? 'old' : 'young';
console.log(type);

// another example
let run = 49;
let fifty = (run >= 50);
console.log(fifty);