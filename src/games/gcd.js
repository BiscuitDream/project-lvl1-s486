import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import core from '..';

const getGcd = (n1, n2) => {
  if (n2 === 0) {
    return n1;
  }

  return getGcd(n2, n1 % n2);
};

const gcdDescription = 'Find the greatest common divisor of given numbers.';

const gcdQuestion = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return cons(question, correctAnswer);
};

const runGcd = () => core(gcdDescription, gcdQuestion);

export default runGcd;
