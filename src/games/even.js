import randomNumber from '../randomNumber.js';
import startGame from '../index.js';

//Games'task
export const gameTask = ('Answer "yes" if the number is even, otherwise answer "no".');

//Meaning of the game
const evenNumber = (number) => 
    number % 2 === 0;

//Game's rules
const gameRules = () => {
    const number = randomNumber(1, 100);
    const truAnswer = evenNumber(number) ? 'yes' : 'no';
    return [number, truAnswer];
};

export default () => {
    startGame(gameTask, gameRules);
  };