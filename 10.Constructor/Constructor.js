//Example of Function 
// function func(a, b) {
//     return a + b

// }

// var a = func(2, 3)

// console.log(a)

// Example of Constructor ES5 feature

function Student(na, ag, add) {
    this.name = na
    this.age = ag
    this.address = add
    this.func = function () { }
    console.log("Running function Name", this.name)
    console.log("Running Function Age", this.age)
    console.log("Running funtion Address", this.address)
}

var ameen = new Student("Aamir", 45, "16/1")
console.log(ameen.func())


var Amir = new Student("Ameen", 55, "17/5")
console.log(Amir.func())

// console.log(ameen)
// console.log(Amir);

// Example of Class ES6 feature
