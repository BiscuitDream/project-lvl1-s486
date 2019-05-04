#!/usr/bin/env node
import readlineSync from 'readline-sync';

const rounds = 3;

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
console.log();

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log();

const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const evenGame = (count) => {
  if (count >= rounds) {
    return console.log(`Congratulations, ${name}!`);
  }

  const secret = getRandomInt(0, 100);
  const isEven = secret % 2 === 0;

  console.log(`Question: ${secret}`);

  const answer = readlineSync.question('Your answer: ');
  if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
    console.log('Correct!');
  } else {
    const correct = isEven ? 'yes' : 'no';
    const message = `'${answer}' is wrong answer ;(. Correct answer was '${correct}'. \nLet's try again, ${name}`;
    return console.log(message);
  }

  return evenGame(count + 1);
};

evenGame(0);
