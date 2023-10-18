//destructuring object
const student = {
	id: 530269,
	name: 'Maryaam',
	age: 20,
	course: {
		program: 'Java',
		DBMS: 'SQL',
	},
	// education: {
	// 	gpa: 4.3,
	// }
};
const { name, age: boyos, id } = student;
console.log(name, boyos); //logs Maryaam 20
const { course: { DBMS: database } } = student;
console.log(database); //logs SQL

const { education: { gpa: points } = {} } = student;//if education not exist set default data as empty object
console.log(points); //logs undefined

console.log('----------------------------');

// ## Arrat destructure
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [a, b, c, d, e, f, g, h, i] = numbers;
console.log(a, b, c, d, e, f, g, h, i);//logs 1 2 3 4 5 6 7 8 9

let [, , , x, , , y] = numbers;
console.log(x, y);//logs 4 7

const array = [11, 22, 33, [444, 555, 666], 77, 88];
let [, , , [, m]] = array;
console.log(m);//logs 555

//## Swapping
var p = 5;
var q = 7;
// // old way
// console.log('Before: '+ p,q);
// var temp = p;
// p = q;
// q = temp;
// console.log('After: '+p, q);

//destructuring way
console.log('Before: ' + p, q);
[p, q] = [q, p];
console.log('After: ' + p, q);