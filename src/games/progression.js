import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import core from '..';

const length = 10;

const progressionDescription = 'What number is missing in the progression?';

const getProgression = (firstElement, progressionStep, progressionLength, indOfHidden) => {
  const iter = (element, count, acc) => {
    if (count >= progressionLength) {
      return acc.trim();
    }

    const newElement = (count === indOfHidden) ? '..' : element;
    const newAcc = `${acc} ${newElement}`;

    return iter(element + progressionStep, count + 1, newAcc);
  };

  return iter(firstElement, 0, '');
};

const progressionQuestion = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 5);
  const hiddenElementIndex = getRandomInt(0, length - 1);

  // const getQuestion = (element, count, acc) => {
  //   if (count >= length) {
  //     return acc.trim();
  //   }
  //   const newElement = (count === hiddenElementIndex) ? '..' : element;
  //   const newAcc = `${acc} ${newElement}`;

  //   return getQuestion(element + step, count + 1, newAcc);
  // };

  const question = getProgression(start, step, length, hiddenElementIndex);
  const correctAnswer = String(start + (step * (hiddenElementIndex)));

  return cons(question, correctAnswer);
};

const runProgression = () => core(progressionDescription, progressionQuestion);

export default runProgression;
