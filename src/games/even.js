import readlineSync from 'readline-sync';
import userName from '../cli';

const miss = ''yes' is wrong answer ;(. Correct answer was 'no'. Lets try again, `${userName}!`';
const evenNumber = (number) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let score = 0; score <= 4; score += 1) {
const answer = readlineSync.question()
    if (number % 2 === 0 || answer === 'yes') {
        console.log("Correct!")
    }
    if (number % 2 !== 0 || answer === 'no') {
        console.log("Correct!")
    }
    else return miss;
    }
};
export default evenNumber;