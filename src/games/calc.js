import readlineSync from 'readline-sync';
import randomIntFromInterval from '../functions.js';
import { correct } from '../functions.js';

export function operationOnNumbers() {
  const trueAnswer = (f1, operator, f2) => {
    let result = 0;
    switch (operator) {
      case '+':
        return result = Number(f1) + Number(f2);
      case '-':
        return result = Number(f1) - Number(f2);
      case '*':
        return result = Number(f1) * Number(f2);
    }
  }
  return trueAnswer;
}
  export function makeQuestion() {
  const rn1 = randomIntFromInterval(1, 99);
  const rn2 = randomIntFromInterval(1, 99);
  const yry = [rn1, rn2];
  const operator = ['+', '-', '*'];
  const randomIndex = randomIntFromInterval(1, 3);
  const randomEx = (`${yry[0]} ${operator[randomIndex]} ${yry[1]}`);
  const answerEx = readlineSync.question('Your answer: ');
  console.log(`${trueAnswer(yry[0], operator[randomIndex], yry[1])}`)
}
makeQuestion();