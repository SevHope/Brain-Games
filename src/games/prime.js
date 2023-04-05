import getRandomNumber from '../randomNumber.js';

import startGame from '../index.js';

// Games'task
export const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Meaning of the game
const isPrimeNumber = (number) => {
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
const getRoundData = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  startGame(gameTask, getRoundData);
};
