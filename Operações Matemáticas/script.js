let firstNumber = prompt('Digite o primeiro número');
let secondNumber = prompt('Digite o segundo número');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

const isSumEven = sum % 2 === 0;
const areNumbersEqual = firstNumber === secondNumber;

alert('Soma: ' + sum);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + multi);
alert('Divisão: ' + div);
alert('Resto da divisão: ' + restDiv);

alert('A soma dos dois números é ' + (isSumEven ? 'par' : 'ímpar') + ': ' + sum);
alert('Os números inseridos são ' + (areNumbersEqual ? 'iguais' : 'diferentes'));