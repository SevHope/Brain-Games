import getRandomNumber from '../randomNumber.js';

import startGame from '../index.js';

// Games'task
export const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// Meaning of the game
const isEvenNumber = (number) => number % 2 === 0;

// Game's rules
const getRoundData = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEvenNumber(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  startGame(gameTask, getRoundData);
};
