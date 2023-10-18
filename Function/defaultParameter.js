// Javascript function default parameter
function num(x = 5) {
    return x;
}
console.log(num());//logs 5
console.log(num(undefined));// logs 5
console.log(num(null));//logs null
console.log(num(10));//logs 10