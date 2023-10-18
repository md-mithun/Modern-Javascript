var address = 'Kushtia';
let student = {
    name: 'Anika',
    age: 20,
    course: ['Java', 'C++', 'DBMS'],
    // address:address,//if keys and value are same text then use only one
    address,
}
console.log(Object.keys(student));//logs only keys
console.log(Object.values(student));//logs only values
console.log(Object.entries(student));//logs entries into differents array
