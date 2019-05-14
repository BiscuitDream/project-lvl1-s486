import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// Спрашиваем у пользователя имя, далее приветствуем его
const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;

// Кол-во раундов игры
const rounds = 3;

const core = (description, askQuestion, getAnswer) => {
  // Приветствие
  console.log('Welcome to the Brain Games!');

  // Вывод правил игры
  console.log(description);
  console.log();

  // Получение имени и приветствие по имени
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();

  // Начинаем раунды
  const round = (count) => {
    if (count >= rounds) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    // Получаем фразу для вопроса и правильный ответ (пара/hexlet-pairs)
    const question = askQuestion(); // пара
    const phrase = car(question); // фраза для вопроса
    const corectAnswer = cdr(question); // верный ответ

    // Задаем вопрос
    console.log(`Question: ${phrase}`);

    // Получаем ответ, обрабатываем его
    const answer = readlineSync.question('Your answer: ');
    const processedAnswer = getAnswer(answer);

    if (processedAnswer === corectAnswer) {
      console.log('Correct!');
    } else {
      const message = `'${processedAnswer}' is wrong answer ;(. Correct answer was '${corectAnswer}'. \nLet's try again, Sam!`;
      console.log(message);
      return;
    }

    return round(count + 1);
  };

  round(0);
};

export { core };
