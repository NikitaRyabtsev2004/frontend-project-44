import { getAnswerForQuestion } from '../cli.js';
import getRandomNumber from '../utils/randomNumber.js';

export default (rules) => {
  const operations = ['+', '-', '*'];

  function getOperation() {
    return operations[getRandomNumber(2)];
  }

  function next() {
    const num1 = getRandomNumber(99);
    const num2 = getRandomNumber(99);
    const operation = getOperation();
    const expression = `${num1} ${operation} ${num2}`;
    // eslint-disable-next-line no-eval
    const rightAnswer = eval(expression);
    console.log(`Question: ${expression}`);
    const answer = getAnswerForQuestion('Your answer:');

    rules.check({ rightAnswer, answer }, next);
  }

  return {
    start() {
      console.log('What is the result of the expression?');
      next();
    },
  };
};
