import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
// import { cons, car, cdr, toString } from 'hexlet-pairs';

// Спрашиваем у пользователя имя, далее приветствуем его
const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;

// const getName = () => {
//   const name = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${name}!`);
//   console.log();

//   return name;
// };

const core = (rules, askQuestion, getAnswer) => {
  const rounds = 3;
  // Приветствие
  console.log('Welcome to the Brain Games!');

  // Вывод правил игры
  console.log(rules);
  console.log();

  // Получение имени и приветствие по имени
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();

  // Начинаем раунды
  const round = (count) => {
    if (count >= rounds) {
      return console.log(`Congratulations, ${name}!`);
    }

    // Получаем фразу для вопроса и правильный ответ (пара/hexlet-pairs)
    const question = askQuestion(); // пара
    const phrase = car(question); // фраза для вопроса
    const corectAnswer = cdr(question); // верный ответ

    // Задаем вопрос
    console.log(`Question: ${phrase}`);

    // Получаем ответ обрабаотываем его
    const answer = readlineSync.question('Your answer: ');
    const processedAnswer = getAnswer(answer);

    if (processedAnswer === corectAnswer) {
      console.log('Correct!');
    } else {
      const message = `'${processedAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'. \nLet's try again, Sam!`;
      return console.log(message);
    }

    return round(count + 1);
  };

  return round(0);
};

export { core };
