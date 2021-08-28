import readlineSync from 'readline-sync';

const run = (gameTask, getData) => {
  const ROUNDS_COUNT = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTask);
  let question;
  let correctAnswer;
  let userAnswer;
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    [question, correctAnswer] = getData();
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default run;
