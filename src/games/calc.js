import startGame from '../index.js';
import randomNumber from '../randomNumber.js';

//Games'task
const gameTask = ('What is the result of the expression?');

//Meaning of the game
const sign = ['+', '-', '*'];
const truResult = (randomSign, number1, number2) => {
    if (randomSign === '+') {
        let result = number1 + number2;
        return result}
    if (randomSign === '-') {
        let result = number1 - number2;
        return result}
    if (randomSign === '*') {
        let result = number1 * number2;
        return result};
};

//Game's rules
const gameRules = () => {
    const number1 = randomNumber(1, 10);
    const number2 = randomNumber(1, 10);
    const randomIndex = randomNumber(0, 3);
    const randomSign = sign[randomIndex];
    const question = `${number1}${randomSign}${number2}`;
    const result = truResult(randomSign, number1, number2);
    return [question, result];
};

export default () => {
    startGame(gameTask, gameRules);
  };