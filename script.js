let readlineSync = require('readline-sync');

var operation = readlineSync.question('What operation would you like to perform? ', {
  limit: ['+', '-', '*', '/'],
  limitMessage: 'Sorry, $<lastInput> is not a valid operation.'
});

var firstNumber = readlineSync.questionInt('Please enter the first number: ', {
  limitMessage: 'Sorry, $<lastInput> is not a valid number.'
});
var secondNumber = readlineSync.questionInt('Please enter the second number: ', {
  limitMessage: 'Sorry, $<lastInput> is not a valid number.'
});

var result = 0;

if (operation === '+') {
  result = parseInt(firstNumber) + parseInt(secondNumber);
} else if (operation === '-') {
  result = parseInt(firstNumber) - parseInt(secondNumber);
} else if (operation === '*') {
  result = parseInt(firstNumber) * parseInt(secondNumber);
} else if (operation === '/') {
  result = parseInt(firstNumber) / parseInt(secondNumber);
} else {
  console.log('Invalid operation');
}

console.log('The result is: ' + result);
