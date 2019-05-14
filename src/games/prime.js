import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeQuestion = () => {
  const number = getRandomInt(1, 100);

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

  const coorectAnswer = isPrime(number) ? 'yes' : 'no';

  return cons(number, coorectAnswer);
};

const primeAnswer = string => string;

export { primeRules, primeQuestion, primeAnswer };
