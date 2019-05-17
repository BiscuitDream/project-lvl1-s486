import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import core from '..';

const evenDescription = 'Answer "yes" if number even otherwise answer "no".';

const evenQuestion = () => {
  const question = getRandomInt(0, 100);
  const isEven = num => num % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

const runEven = () => core(evenDescription, evenQuestion);

export default runEven;
