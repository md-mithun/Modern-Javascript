//Array.prototype.find()
// ## Example 1
let roll = [21, 22, 23, 24, 35, 46, 47, 88];
let pass = roll.find((crrntValue, CurrentIndex, arr) => {
    return crrntValue > 33;
})
console.log("first passed marks = " + pass);

//## Example 2
class Mithun {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log('Anika');
    }
    example() {
        let array = [1, 2, 4];
        // array.find(function (currentValue, CurrentIndex, arr) {
        //     this.display();//here this is window object
        // })
        array.find((currentValue, CurrentIndex, arr) => {
            this.display();//here this is Mithun class
        })
        array.find(function (currentValue, CurrentIndex, arr) {
            this.display();//here this is Mithun class
        }, this)
    }
}

let x = new Mithun('Muhammad', 19);
x.example()