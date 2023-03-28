import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber.js';

//Greetings
console.log('Welcome to the Brain Games!');
const userName = () => {
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}!`);
    return name;
};

//User name
const name = userName();

//Start game, constants
console.log('What is the result of the expression?');
const sign = ['+', '-', '*'];

//tru resault
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
    for (let score = 0; score < 3; score += 1) {
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