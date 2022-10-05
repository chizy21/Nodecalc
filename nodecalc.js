//this is what they were expecting - Audreys code from my video critique.

let readlineSync = require('readline-sync');

const operationList = ['+', '-', '*', '/'];
const operationQuestion = 'What operation would you like to perform? ';
const operationLimitMessage = 'Sorry, $<lastInput> is not a valid operation.';

const lettersList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const lettersQuestion = 'Which letter would you like to9 choose: ';
const lettersLimitMessage = 'Sorry, $<lastInput> is not a valid letter.';

const getQuestionAnswer = (operationList, question, limitMessage) => {
    return readlineSync.question(question, {
        limit: operationList,
        limitMessage: limitMessage
    });
}

const operation = getQuestionAnswer(operationList, operationQuestion, operationLimitMessage);

function getNumber(order) {
    return readlineSync.questionInt('Please enter the ${order} number: ', {
        limitMessage: 'Sorry, $<lastInput> is not a valid number.'
    });
}

var firstNumber = getNumber('first');
var secondNumber = getNumber('second');

var result = 0;

const calculate = (operation, firstNumber, secondNumber) => {
    if (operation === '+') {
        return parseInt(firstNumber) + parseInt(secondNumber);
    } else if (operation === '-') {
        return parseInt(firstNumber) - parseInt(secondNumber);
    } else if (operation === '*') {
        return parseInt(firstNumber) * parseInt(secondNumber);
    } else {
        return parseInt(firstNumber) / parseInt(secondNumber);
    } 
};

const result = calculate(operation, firstNumber, secondNumber);

console.log('The result is: ', result);