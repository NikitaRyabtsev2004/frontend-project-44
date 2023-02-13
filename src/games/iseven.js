import readlineSync from 'readline-sync';
import randomIntFromInterval from '../functions.js';

export default function evenOrOddFunction() {
  let i = 0;
  while (i < 3) {
    const randomNumber = randomIntFromInterval(1, 99);
    const questionRandomNum = (`Question: ${randomNumber}`);
    console.log(questionRandomNum);
    const answerRandomNum = readlineSync.question('Your answer: ');
    const answerNo = 'no';
    const answerYes = 'yes';
    if ((randomNumber % 2 === 0 && answerRandomNum === 'yes') || (randomNumber % 2 !== 0 && answerRandomNum === 'no')) {
      console.log('Correct!');
      i += 1;
      if (i > 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else if (answerRandomNum === '') {
      if (randomNumber % 2 === 0) {
        console.log(`'${answerRandomNum}' is wrong answer ;(. Correct answer was ${answerYes}.\nLet's try again, ${name}`);
        break;
      } else if (randomNumber % 2 !== 0) {
        console.log(`'${answerRandomNum}' is wrong answer ;(. Correct answer was ${answerNo}.\nLet's try again, ${name}`);
        break;
      }
    } else if (answerRandomNum === 'yes') {
      console.log(`'${answerRandomNum}' is wrong answer ;(. Correct answer was ${answerNo}.\nLet's try again, ${name}`);
      break;
    } else if (answerRandomNum === 'no') {
      console.log(`'${answerRandomNum}' is wrong answer ;(. Correct answer was ${answerYes}.\nLet's try again, ${name}`);
      break;
    }
  }
}