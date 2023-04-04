import getRandomNumber from '../randomNumber.js';

import startGame from '../index.js';

// Games'task
export const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Meaning of the game
const getPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Game's rules
const getGameRules = () => {
  const number = getRandomNumber(1, 100);
  const truAnswer = getPrimeNumber(number) ? 'yes' : 'no';
  return [number, truAnswer];
};

export default () => {
  startGame(gameTask, getGameRules);
};
