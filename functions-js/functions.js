
// decalaracao de função faz o hoisting
console.log(hello());
function hello() {
    return 1 + 1;
}

// function expression
const func = function () {
    return 1 + 1;
}
console.log(func());

// function expression with Array
const funcArray = () => 1 + 1;
console.log(funcArray());


// all params will come in the ARGUMENTS variable
function sumNumber() {
    let total = 0;
    for (const number of arguments) {
        total += number;
    }
    return total;
}
console.log(sumNumber(1, 43, 4, 213, 23, 09, 34, 12));


// last params with REST PARAMETER
function operationNumber(operator, acc, ...numbers) {
    for (const number of numbers) {
        if (operator === '+') acc += number;
        if (operator === '-') acc -= number;
        if (operator === '/') acc /= number;
        if (operator === '*') acc *= number;
    }
    return acc;
}
console.log(operationNumber('+', 1, 43, 4, 213, 23, 09, 34, 12));
