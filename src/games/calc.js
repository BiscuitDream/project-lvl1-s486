import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import core from '..';

const calcDescription = 'What is the result of the expression?';

const getResult = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

const operators = '+-*';
const indexOfOperation = getRandomInt(0, operators.length - 1);

const calcQuestion = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const operator = operators[indexOfOperation];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(getResult(num1, num2, operator));

  return cons(question, correctAnswer);
};

const runCalc = () => core(calcDescription, calcQuestion);

export default runCalc;
