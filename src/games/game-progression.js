import { getAnswerForQuestion } from '../cli.js';
import getRandomNumber from '../utils/randomNumber.js';

export default (rules) => {
  function createProgression(first, base, count) {
    return [...Array(count)].map((_, i) => first + base * i);
  }

  function hideProgressionNumberByIndex(progression, index) {
    const p = [...progression];
    p[index] = '..';
    return p;
  }

  function next() {
    const first = getRandomNumber(19);
    const base = getRandomNumber(5) + 1;
    const count = getRandomNumber(5) + 5;
    const progression = createProgression(first, base, count);
    const rightAnswerIndex = getRandomNumber(count - 1);
    const rightAnswer = progression[rightAnswerIndex];
    const progToShow = hideProgressionNumberByIndex(progression, rightAnswerIndex)
      .join(' ');
    console.log(`Question: ${progToShow}`);
    const answer = getAnswerForQuestion('Your answer:');

    rules.check({ rightAnswer, answer }, next);
  }

  return {
    start() {
      console.log('What number is missing in the progression?');
      next();
    },
  };
};
