import run from '../cli.js';
import getRandomInt from '../getRandomInt.js';

const calc = (first, operation, second) => {
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      throw new Error('Эта операция не поддерживается');
  }
};

const getRandOperation = (operations) => operations[Math.floor(Math.random() * operations.length)];

const brainCalc = () => {
  const MIN_VALUE = 0;
  const MAX_VALUE = 100;
  const OPERATIONS = ['+', '-', '*'];
  const gameTask = 'What is the result of the expression?';
  const getData = () => {
    const first = getRandomInt(MIN_VALUE, MAX_VALUE);
    const second = getRandomInt(MIN_VALUE, MAX_VALUE);
    const operation = getRandOperation(OPERATIONS);
    const question = `${first} ${operation} ${second}`;
    const correctAnswer = `${calc(first, operation, second)}`;
    return [question, correctAnswer];
  };
  run(gameTask, getData);
};

export default brainCalc;
