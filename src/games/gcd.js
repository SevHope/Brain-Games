/* eslint-disable no-param-reassign */
import getRandomNumber from '../randomNumber.js';

import startGame from '../index.js';

// Games'task
const gameTask = 'Find the greatest common divisor of given numbers.';

// Meaning of the game
const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

// Game's rules
const getGameRules = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const result = getGcd(number1, number2);
  return [question, result];
};

export default () => {
  startGame(gameTask, getGameRules);
};
