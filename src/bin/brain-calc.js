#!/usr/bin/env node
import readlineSync from 'readline-sync';

const rounds = 3;

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
console.log();

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log();

const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

// Словарем реализовать
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

// Словарем реализовать
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

const calcGame = (count) => {
  if (count >= rounds) {
    return console.log(`Congratulations, ${name}!`);
  }

  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  console.log('Question: :', question);
  const result = getResult(num1, num2, operator);

  const answer = Number(readlineSync.question('Your answer: '));

  if (answer === result) {
    console.log('Correct!');
  } else {
    const message = `'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, Sam!`;
    return console.log(message);
  }

  return calcGame(count + 1);
};

calcGame(0);
