import getRandomNumber from '../randomNumber.js';

import startGame from '../index.js';

export const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const getRoundData = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEvenNumber(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  startGame(gameTask, getRoundData);
};
