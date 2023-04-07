/* eslint-disable no-param-reassign */
import getRandomNumber from '../randomNumber.js';

import startGame from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const startGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return startGcd(number2, number1 % number2);
};

const getRoundData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const result = startGcd(number1, number2);
  return [question, result];
};

export default () => {
  startGame(gameTask, getRoundData);
};
