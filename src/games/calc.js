import readlineSync from 'readline-sync';

export default function generateExample() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let i = 0;
  console.log('What is the result of the expression?');
  function trueAnswer(f1, operator, f2) {
    let result = 0;
    // eslint-disable-next-line default-case
    switch (operator) {
      case '+':
        result = Number(f1) + Number(f2);
        break;
      case '-':
        result = Number(f1) - Number(f2);
        break;
      case '*':
        result = Number(f1) * Number(f2);
        break;
    }
    return result;
  };
  function rn() {
    return Math.floor(Math.random() * 100 - 1);
  };
  while (i < 3) {
    rn();
    const yry = [rn(), rn()];
    const operator = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * 3);
    const randomEx = (`${yry[0]} ${operator[randomIndex]} ${yry[1]}`);
    const question = (`Question: ${randomEx}`);
    console.log(question);
    const answerEx = readlineSync.question('Your answer: ');
    if (Number(answerEx) === trueAnswer(yry[0], operator[randomIndex], yry[1])) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      };
    } else {
      console.log(`'${Number(answerEx)}' is wrong answer ;(. Correct answer was ${trueAnswer(yry[0], operator[randomIndex], yry[1])}.\nLet's try again, ${name}`);
      break;
    };
  };
};
generateExample();