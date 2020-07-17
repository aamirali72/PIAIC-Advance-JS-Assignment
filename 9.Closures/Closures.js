// //Exp1
// function outer() {
//     var Outervar = "Outer....."
//     function inner() {
//         var Innervar = "Inner....."
//         console.log(Outervar);
//         console.log(Innervar);
//     }
//     return inner;
// }

// var getFunc = outer();

//Exp2
function myScore() {
    var score = 1;
    return function abc() {
        console.log(score++);
    }
}
var hockey = myScore();
hockey();

