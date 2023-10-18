function sum(x, y, ...numbers) {
  let total = 0;
  console.log(x, y);//logs 1,2
  for (const number of numbers) {
    total += number;//3+4+5
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 12

//when spread use as an arguments it's called rest operator
function concat(...arrays) {
  const result = [];
  for (const array of arrays) {
    result.push(...array);//spread and push into result array
  }
  return result;
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(concat(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
//--------------------------------------------

const obj1 = {
  name: 'mithun',
  age: 21
};

const obj2 = {
  occupation: 'Software Engineer',
  hobbies: ['reading', 'writing', 'coding']
};
const newObj = { ...obj1, ...obj2 };
console.log(newObj); // { name: 'Alice', age: 25, occupation: 'Software Engineer', hobbies: ['reading', 'writing', 'coding'] }
