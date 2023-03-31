import readlineSync from 'readline-sync';

// 3 steps of the game
const startGame = (gameTask, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name?');
  console.log(`Hello, ${nameUser}!`);
  console.log(gameTask);
  for (let i = 0; i < 3; i += 1) {
    const [question, truAnswer] = gameRules();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((String(truAnswer)) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${truAnswer}'.\nLet's try again, ${nameUser}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default startGame;
