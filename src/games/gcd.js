import readlineSync from 'readline-sync';
import randomIntFromInterval from '../functions.js';

export default function Nod() {
  let i = 0;
  while (i < 3) {
    let x = randomIntFromInterval(1, 99);
    let y = randomIntFromInterval(1, 99);
    const question = (`Question: ${x} ${y};`);
    if ((typeof x !== 'number') || (typeof y !== 'number')) return false;
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const num = Number(answer);
    if (num === x) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else if (num !== x) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${x}.\nLet's try again, ${name}`);
      break;
    }
  }
}