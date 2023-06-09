import readlineSync from 'readline-sync';

const stepsOfGame = 3;
const startGame = (gameTask, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(gameTask);

  for (let i = 0; i < stepsOfGame; i += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((String(correctAnswer)) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${nameUser}!`);
};

export default startGame;
