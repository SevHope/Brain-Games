import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

// Games'task
const gameTask = ('What is the result of the expression?');

// Meaning of the game
const signs = ['+', '-', '*'];
const startCalcGame = (randomSign, number1, number2) => {
  switch (randomSign) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown sign: '${randomSign}'!`);
  }
};

// Game's rules
const getRoundData = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const randomIndex = getRandomNumber(0, 2);
  const randomSign = signs[randomIndex];
  const question = `${number1} ${randomSign} ${number2}`;
  const result = startCalcGame(randomSign, number1, number2);
  return [question, result];
};

export default () => {
  startGame(gameTask, getRoundData);
};
