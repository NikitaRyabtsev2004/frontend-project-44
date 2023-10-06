import { getAnswerForQuestion } from '../cli.js';
import getGCD from '../utils/gcd.js';
import getRandomNumber from '../utils/randomNumber.js';

export default (rules) => {
  function next() {
    const num1 = getRandomNumber(9);
    const num2 = getRandomNumber(9);
    const rightAnswer = getGCD(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const answer = getAnswerForQuestion('Your answer:');

    rules.check({ rightAnswer, answer }, next);
  }

  return {
    start() {
      console.log('Find the greatest common divisor of given numbers.');
      next();
    },
  };
};
