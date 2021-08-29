import run from '../index.js';
import getRandomInt from '../getRandomInt.js';

const gcd = (first, second) => {
  let a = first;
  let b = second;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const brainGcd = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const getData = () => {
    const first = getRandomInt(0, 100);
    const second = getRandomInt(0, 100);
    const question = `${first} ${second}`;
    const correctAnswer = `${gcd(first, second)}`;
    return [question, correctAnswer];
  };
  run(gameTask, getData);
};

export default brainGcd;
