import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const progressionRules = 'What number is missing in the progression?';

const progressionQuestion = () => {
  const progressionLength = 10;
  const progressionStart = getRandomInt(1, 100);
  const progressionStep = getRandomInt(1, 5);
  const progressionSecretIndex = getRandomInt(0, 9);

  const getPhrase = (element, count, acc) => {
    if (count >= progressionLength) {
      return acc;
    }
    const newElement = (count === progressionSecretIndex) ? '..' : element + progressionStep;
    const newAcc = `${acc} ${newElement}`;

    return getPhrase(element + progressionStep, count + 1, newAcc);
  };

  const getCorrectAnswer = (current, count) => {
    if (count > progressionSecretIndex) {
      return current;
    }
    const newCurrent = current + progressionStep;

    return getCorrectAnswer(newCurrent, count + 1);
  };

  const phrase = getPhrase(progressionStart, 0, '');
  const correctAnswer = getCorrectAnswer(progressionStart, 0);

  return cons(phrase, correctAnswer);
};

// Улучшить, NaN
const progressionAnswer = string => Number(string);

export { progressionRules, progressionQuestion, progressionAnswer };
