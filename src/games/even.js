import readlineSync from 'readline-sync';
import randomNumber from '../randomNumber.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const evenNumber = () => {
    for (let score = 0; score < 3; score += 1) {
        const number = randomNumber(1, 100);
        const question = (`Question: ${number}`);
        console.log(question);
        const answer = readlineSync.question('Your answer: ');
        if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
            console.log("Correct!")}
          else {console.log('"yes" is wrong answer ;(. Correct answer was "no".');
          console.log(`Let's try again, ${name}!`);
          return;}
    };
    console.log(`Congratulations, ${name}!`)
};

export default evenNumber;