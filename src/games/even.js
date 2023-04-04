import getRandomNumber from '../randomNumber.js';

import startGame from '../index.js';

// Games'task
export const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// Meaning of the game
const startEvenNumber = (number) => number % 2 === 0;

// Game's rules
const getGameRules = () => {
  const number = getRandomNumber(1, 100);
  const truAnswer = startEvenNumber(number) ? 'yes' : 'no';
  return [number, truAnswer];
};

export default () => {
  startGame(gameTask, getGameRules);
};
