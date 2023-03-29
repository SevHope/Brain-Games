import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber.js';

//Greetings
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);

//Start game, constants
const gameRules = ('What is the result of the expression?')
console.log(gameRules);
const sign = ['+', '-', '*'];

//tru result
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

//3 steps of game
const calcGame = (answer, result) => {
    for (let i = 0; i < 3; i += 1) {
    const number1 = randomNumber(1, 10);
    const number2 = randomNumber(1, 10);
    const randomIndex = randomNumber(0, 3);
    const randomSign = sign[randomIndex];
    const example = `${number1}${randomSign}${number2}`;
    const question = (`Question: ${example}`);
    console.log(question);
    answer = readlineSync.question('Your answer: ');
    result = String(truResult(randomSign, number1, number2));
        if (answer === result) {
            console.log("Correct!");
        }
        else {console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
        return;}
};
console.log(`Congratulations, ${name}!`)
};
export default calcGame;