import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import core from '..';

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeQuestion = () => {
  const question = getRandomInt(1, 100);

  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= (num / 2); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const coorectAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, coorectAnswer);
};

const primeAnswer = string => string;

const runPrime = () => core(primeDescription, primeQuestion, primeAnswer);

export default runPrime;
