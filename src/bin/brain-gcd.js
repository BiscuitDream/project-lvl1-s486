#!/usr/bin/env node

import { core } from '..';
import { gcdRules, gcdQuestion, gcdAnswer } from '../games/game-gcd';

core(gcdRules, gcdQuestion, gcdAnswer);

// import readlineSync from 'readline-sync';

// const rounds = 3;

// console.log('Welcome to the Brain Games!');
// console.log('Find the greatest common divisor of given numbers.');
// console.log();

// const name = readlineSync.question('May I have your name? ');
// console.log(`Hello, ${name}!`);
// console.log();

// const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

// const getGcd = (n1, n2) => {
//   if (n2 === 0) {
//     return n1;
//   }

//   return getGcd(n2, n1 % n2);
// };

// const gcdGame = (count) => {
//   if (count >= rounds) {
//     return console.log(`Congratulations, ${name}!`);
//   }

//   const num1 = getRandomInt(1, 100);
//   // console.log('num1 :', num1);
//   const num2 = getRandomInt(1, 100);
//   // console.log('num2 :', num2);
//   const result = getGcd(num1, num2);
//   console.log('result :', result);

//   const question = `${num1} ${num2}`;
//   console.log('Question: :', question);

//   const answer = Number(readlineSync.question('Your answer: '));

//   if (answer === result) {
//     console.log('Correct!');
//   } else {
//     const message = `'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, Sam!`;
//     return console.log(message);
//   }

//   return gcdGame(count + 1);
// };

// gcdGame(0);
