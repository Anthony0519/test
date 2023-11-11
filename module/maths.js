//creating some caculations

//additions
const add = (firstNumber,secondNumber)=>{
    const result = firstNumber + secondNumber
    return result;
};

// subtractions
const sub = (firstNumber,secondNumber)=>{
    const result = secondNumber - firstNumber
    return result;
};

// multiplication
const multiply = (firstNumber,secondNumber)=>{
    const result = firstNumber * secondNumber
    return result;
};

// division
const divide = (firstNumber,secondNumber)=>{
    const result = secondNumber/firstNumber
    return result;
};
module.exports = {
    add,
    sub,
    multiply,
    divide,
};