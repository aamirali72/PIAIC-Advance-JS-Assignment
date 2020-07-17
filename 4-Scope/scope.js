/* example : 1 Global Variable */
/*        var aamirGlobalScope = "Aamir Ali";
        fGS();
        function fGS() {
            console.log(aamirGlobalScope);
        }
*/

/* example :  2 Local Variable Erro Undefine Note local variable we can use in function where we have declare*/
/*        console.log(aamirLocalScope); */

/*       fGS();
       function fGS() {
           var aamirLocalScope = "Aamir Ali";
           console.log(aamirLocalScope);
       }
 */

// AUtomaticaly Global-- >
//         < !-- if you assige  avalue to a variable that has not been declare it will be AUtomaticaly become a GLOBAL Variable-- >

/* fGS();
console.log(aamirLocalScope);

function fGS() {
    aamirLocalScope = "Aamir Ali";
} */

//function createUserName() {
//userName = "Ameen Alam";
//}

//       function modifyUserName() {
//         if (userName)
//           userName = "Daniyal Nagori";
// };

//        function showUserName() {
//          alert(userName);
//     } -->
//
//      createUserName();
//    showUserName(); // Ameen Alam 

//        modifyUserName();
//        showUserName(); // Daniyal Nagori

//SCOPE – Examples

// function myName() {
//     var mynameis = 'aamir ali'
// }
// myName();
// console.log(mynameis);
//REASON: Variable age is defined in the function it can’t be access from outside the function.

//not defined
// if (true) {
// var mynameis = 'aamir'
// let brother = 'anwer'
// } 

//console.log(mynameis);
//console.log(brother);

// //udefined
// console.log(sister);
// var sister;

// function add() {
//     if (true) {
//         var mynameis = 'aamir'
//         let brother = 'anwer'
//     }
// }
//add();
// console.log(mynameis)
// console.log(brother)

// var myname = 'aamir'
// function add() {
//     if (myname === 'aamir') {
//         var mynameis = 'aamir'
//         let brother = 'anwer'
//     }
//     else {
//         console.log(mynameis)
//         console.log(brother)
//     }
// }

// add()
// console.log(mynameis)
// console.log(brother)

// const name1 = 'aamir'
// var name2 = 'anwer'

// console.log(name1)

// for (var i = 0; i <= 10; i++) { console.log(i) };
// console.log(i)

const dog = 'snickers';

function logDog() {
    console.log(dog);
}

function go() {
    const dog = 'sunny';
    //logDog();
    //console.log(dog)
}
go();