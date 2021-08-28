import run from '../cli.js';
import getRandomInt from '../getRandomInt.js';

const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getData = () => {
    const question = getRandomInt(0, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  run(gameTask, getData);
};

export default brainEven;
