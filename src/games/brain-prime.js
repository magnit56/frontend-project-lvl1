import run from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getData = () => {
    const question = getRandomInt(0, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  run(gameTask, getData);
};

export default brainPrime;
