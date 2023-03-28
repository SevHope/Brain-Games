import readlineSync from 'readline-sync';

export const start = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
};

const game = () => {
        for (let score = 0; score < 3; score += 1) {
            const question = (`Question: ${gameQuestion}`);
            console.log(question);
            const answer = readlineSync.question('Your answer: ');
            if () {
                console.log("Correct!")}
        };
};
const userWin = () => {
    console.log(`Congratulations, ${name}!`);
};
const userLose = () => {
    console.log('"yes" is wrong answer ;(. Correct answer was "no"./n Let/''s try again, ${name}!');
return;
};