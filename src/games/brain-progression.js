import run from '../index.js';
import getRandomInt from '../getRandomInt.js';

const getProgression = (first, step, progressionLength) => {
  const progression = new Array(progressionLength);
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = first + i * step;
  }
  return progression;
};

const brainProgression = () => {
  const gameTask = 'What number is missing in the progression?';
  const getData = () => {
    const PROGRESSION_LENGTH = 10;
    const first = getRandomInt(1, 9);
    const step = getRandomInt(1, 10);
    const progression = getProgression(first, step, PROGRESSION_LENGTH);
    const riddleIndex = getRandomInt(0, 9);
    const correctAnswer = `${progression[riddleIndex]}`;
    progression[riddleIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
  };
  run(gameTask, getData);
};

export default brainProgression;
