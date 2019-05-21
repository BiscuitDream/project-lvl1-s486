import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import core from '..';

const length = 10;

const progressionDescription = 'What number is missing in the progression?';

const progressionQuestion = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 5);
  const hiddenElementIndex = getRandomInt(0, length - 1);

  const getQuestion = (element, count, acc) => {
    if (count >= length) {
      return acc.trim();
    }
    const newElement = (count === hiddenElementIndex) ? '..' : element;
    const newAcc = `${acc} ${newElement}`;

    return getQuestion(element + step, count + 1, newAcc);
  };

  const question = getQuestion(start - step, 0, '');
  const correctAnswer = String(start + (step * (hiddenElementIndex - 1)));

  return cons(question, correctAnswer);
};

const runProgression = () => core(progressionDescription, progressionQuestion);

export default runProgression;
