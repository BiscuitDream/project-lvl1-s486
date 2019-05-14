import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const getGcd = (n1, n2) => {
  if (n2 === 0) {
    return n1;
  }

  return getGcd(n2, n1 % n2);
};

const gcdRules = 'Find the greatest common divisor of given numbers.';

const gcdQuestion = () => {
  const num1 = getRandomInt(1, 100);
  // console.log('num1 :', num1);
  const num2 = getRandomInt(1, 100);
  // console.log('num2 :', num2);

  const phrase = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2);
  console.log('correctAnswer :', correctAnswer);

  return cons(phrase, correctAnswer);
};

// Заменить на аналог из game-calc.js
const gcdAnswer = string => Number(string);

export { gcdRules, gcdQuestion, gcdAnswer };
