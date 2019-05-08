import readlineSync from 'readline-sync';

// Спрашиваем у пользователя имя, далее приветствуем его
const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;




const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();

  return name;
};

const rounds = 3;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;



const core = (rules, askQuestion, getAnswer) => {
  // Приветствие
  console.log('Welcome to the Brain Games!');

  // Вывод правил игры
  console.log(rules);
  console.log();

  // Получение имени и приветствие по имени
  const name = getName();

  // Начинаем раунды
  const round = (count) => {
    if (count >= rounds) {
      return console.log(`Congratulations, ${name}!`);
    }

    // Получаем фразу для вопроса и правильный ответ
    const result = askQuestion();
    // Получаем ответ
    const answer = getAnswer();

    if (answer === result) {
      console.log('Correct!');
    } else {
      const message = `'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, Sam!`;
      return console.log(message);
    }

    return round(count + 1);
  };

  return round(0);
};

export { core };
