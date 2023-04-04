import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

// Games'task
const gameTask = 'What number is missing in the progression?';

// Meaning of the game
const getProgression = (firstNumber, progressionStep, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = firstNumber + (progressionStep * (i - 1));
  }
  return progression;
};

// Game's rules
const getGameRules = () => {
  const firstNumber = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(2, 5);
  const progressionLength = getRandomNumber(5, 10);
  const progression = getProgression(firstNumber, progressionStep, progressionLength);
  const hiddenNumber = getRandomNumber(0, (progression.length - 1));
  const truAnswer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, truAnswer];
};

export default () => {
  startGame(gameTask, getGameRules);
};
