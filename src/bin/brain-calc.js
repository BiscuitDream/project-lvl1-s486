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

const calcGame = (count) => {
  if (count >= rounds) {
    return console.log(`Congratulations, ${name}!`);
  }

  const num1 = getRandomInt(0, 100);
  console.log('num1 :', num1);
  const num2 = getRandomInt(0, 100);
  console.log('num2 :', num2);
  const operator = getRandomOperator();
  console.log('operator :', operator);
  const expression = `${num1} ${operator} ${num2}`;
  console.log('expression :', expression);
  const result = getResult(num1, num2, operator);
  console.log('result :', result);
  console.log();

  // const isEven = secret % 2 === 0;

  // console.log(`Question: ${secret}`);

  // const answer = readlineSync.question('Your answer: ');
  // if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
  //   console.log('Correct!');
  // } else {
  //   const correct = isEven ? 'yes' : 'no';
  //   const message = `'${answer}' is wrong answer ;(. Correct answer was '${correct}'. \nLet's try again, ${name}`;
  //   return console.log(message);
  // }

  return calcGame(count + 1);
};

calcGame(0);
