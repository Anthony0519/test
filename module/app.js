// //main applications
// //dot notation
// //addition
// const myAddition = require('./maths');
//  let firstNumber = 5;
//  let secondNumber = 20;
//  let result=myAddition.add(firstNumber,secondNumber);
//  console.log(result)

//  //subtraction
// const mysub = require('./maths');
// let main = 5;
// let other = 20;
// let solutions=mysub.sub(main, other);
// console.log(solutions)

// //multiplications
// const mymultiples = require('./maths');
// let yes = 5;
// let no = 20;
// let answers=mymultiples.multiply(yes,no);
// console.log(answers)

// //division
// const mydivides = require('./maths');
// let odoh = 5;
// let Anthony = 20;
// let show=mydivides.divide(odoh, Anthony);
// console.log(show)


//main applications
//distructuring
//addition
const {add, sub, multiply, divide} = require('./maths');
 let firstNumber = 5;
 let secondNumber = 20;
 let result=add(firstNumber,secondNumber);
 console.log(result)

//subtraction
let main = 5;
let other = 20;
let solutions=sub(main, other);
console.log(solutions)

//multiplications
let yes = 5;
let no = 20;
let answers=multiply(yes,no);
console.log(answers)

//division
let odoh = 5;
let Anthony = 20;
let show=divide(odoh, Anthony);
console.log(show)