import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const evenRules = 'Answer "yes" if number even otherwise answer "no".';

const evenQuestion = () => {
  const number = getRandomInt(0, 100);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  return cons(number, correctAnswer);
};

const evenAnswer = string => string;

export { evenRules, evenQuestion, evenAnswer };
