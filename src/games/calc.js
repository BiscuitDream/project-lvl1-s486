import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import core from '..';

const calcDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operator = getRandomInt(1, 3);
  switch (operator) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

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

const calcQuestion = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const operator = getRandomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = getResult(num1, num2, operator);

  return cons(question, correctAnswer);
};

const calcAnswer = (string) => {
  // Почему-то не работает так. Исправил пока что на isNan. Линтер ругается
  // if (typeof Number(string) !== 'number') {
  //   return string;
  // }
  if (Number.isNaN(string)) {
    return string;
  }

  return Number(string);
};

const runCalc = () => core(calcDescription, calcQuestion, calcAnswer);

export default runCalc;


// объединить свичи
