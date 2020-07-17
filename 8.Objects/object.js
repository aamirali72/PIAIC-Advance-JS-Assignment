//exp 1
// var name1 = "Aamir";
// var name2 = "Ali";

// var person1 = {
//     age: 23
// }

// var person2 = {
//     age: 23
// }

// person1 = person2;

// if (person1 == person2) {

//     console.log("Welcome OJB");
// }

//exp2
//Mutable will be change
// var person1 = {
//     age: 23
// }
// var person2 = {
//     age: 50
// }

// // person1 = person2;
// person1 = { ...person2 } //ES6
// // person1 = Object.assign({}, person2);// before es6
// person1.age = 73;

// console.log(person1);
// console.log(person2);

// //exp3

// //immutable Nochange
//immutable
//The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all immutable—it
//is impossible to change values of those types.

// var name1 = "Aamir"
// var name2 = "Aiza"

// name1 = name2;

// console.log(name1)
// console.log(name2)

//exp3

// var objLenght = { age: 25, name: "Aamir", employee: 20 }
// console.log(Object.keys(objLenght));
// console.log(Object.keys(objLenght).length);
// console.log(Object.values(objLenght));


// name1 = "danyal";
// name2 = "nagori";

// name1 = name2;

// // if (name1 = 'nagori') {
// //     console.log("Yes")
// // }
// // else {
// //     console.log("no")
// // }
// name1 = "aamir"
// console.log(name1)
// console.log(name2)


// mutable Ojbect and array will be changed
// var obj1 = {
//     age: 30,
//     name: "Aamir",
//     employee: 50
// }
// var obj2 = {
//     age: 40
// }
// obj1 = obj2;

// if (obj1 === obj2) {
//     console.log("objRun");
// }
// else {
//     console.log("objnoRun");
// }
// var obj3 = Object.assign({}, obj2); //Old Version

// var obj3 = { ...obj2, ...obj1 }
// var obj3 = { ...obj2 };
// obj3.age = 50;

// console.log(obj3);
// console.log(obj2);

//Ojbect Freez()

// var obj1 = {
//     age: 30,
//     name: "Aamir",
//     employee: 50
// }

// obj1.age = 40;
// console.log(obj1);

// var obj4 = Object.freeze(obj1);
// console.log(obj4);

// obj1.age = 40;
// console.log(obj4);
// console.log(obj1);


// var obj1 = {
//     age: 30,
//     name: "Aamir",
//     employee: 50
// }

// // obj1.firstname = "Ali"
// obj1['First-Name'] = "Ali"

// console.log(obj1)

///[] Square rotation

// //Exp1 Pick the value
// var getvalue = prompt('get an object pass by key');

// var obj1 = {
//     age: 30,
//     name: "Aamir",
//     employee: 50
// }

// console.log(obj1[getvalue]);

// //Exp2 add the value
// var getvalue = prompt('get an object pass by key');

// var obj1 = {
//     age: 30,
//     name: "Aamir",
//     employee: 50
// }

// obj1.firstname = getvalue

// console.log(obj1);


// //Exp3

// var name1 = "daniyal"
// function doStuff(name) {
//     name1 = "Tariq"
//     console.log(name);
// }

// doStuff(name1);
// console.log(name1);

// var obj = { name: "Usman" };
// function objCAll(name) {
//     obj = "bashir"
//     console.log(name);
// }
// objCAll(obj)
// console.log(obj);

//Exp4

// var name1 = "daniyal"
// function doStuff(name) {
//     var name1 = "Tariq"
//     console.log(name1);
// }

// doStuff(name1);
// console.log(name1);

// var obj = { name: "Usman" };
// function objCAll(name) {
//     var obj = "bashir"
//     console.log(name);
// }
// objCAll(obj)
// console.log(obj);