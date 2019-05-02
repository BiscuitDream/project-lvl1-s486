import readlineSync from 'readline-sync';

// Спрашиваем у пользователя имя, далее приветствуем его
export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};
