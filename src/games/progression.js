import randomNumber from '../randomNumber.js';
import startGame from '../index.js';

//Games'task
const gameTask = ('What number is missing in the progression?');

//Meaning of the game

//Game's rules
const gameRules = () => {
const progression = [];
const firstNumber = randomNumber(1, 50);
const progressionStep = randomNumber(2, 5);
const progressionLength = randomNumber(5, 10);
for (let i = 0; i < progressionLength; i += 1) {
progression[i] = firstNumber + (progressionStep * (i - 1));
};
const hiddenNumber = randomNumber(0, (progression.length - 1));
const truAnswer = progression[hiddenNumber];
progression[hiddenNumber] = '..';
const question = progression.join(' ');
return [question, truAnswer];
};

export default () => {
    startGame(gameTask, gameRules);
  };