import randomNumber from '../randomNumber.js';

import startGame from '../index.js';

// Games'task
export const gameTask = ('Answer "yes" if given number is prime. Otherwise answer "no".');

// Meaning of the game
const primeNumber = (number) => {
  if (number === 1) {
    return false;
  } if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Game's rules
const gameRules = () => {
  const number = randomNumber(1, 100);
  const truAnswer = primeNumber(number) ? 'yes' : 'no';
  return [number, truAnswer];
};

export default () => {
  startGame(gameTask, gameRules);
};
