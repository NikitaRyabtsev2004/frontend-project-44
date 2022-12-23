import readlineSync from 'readline-sync';

export default function evenOrOddFunction() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const randomNumber = Math.floor(Math.random() * 100 - 1);
    const questionRandomNum = `Question: ${randomNumber}`;
    console.log(questionRandomNum);
    const answerRandomNum = readlineSync.question('Your answer: ');
    if ((randomNumber % 2 === 0 && answerRandomNum === 'yes') || (randomNumber % 2 !== 0 && answerRandomNum === 'no')) {
      console.log('Correct!');
      i += 1;
      if (i > 2) {
        console.log(`Congratulations, ${name}!`)
      };
    } else if (answerRandomNum === 'yes') {
      const reversedAnswer = 'no';
      console.log(`'${answerRandomNum}' is wrong answer ;(. Correct answer was ${reversedAnswer}.\nLet's try again, ${name}`);
      break;
    } else if (answerRandomNum === 'no') {
      const reversedAnswer = 'yes';
      console.log(`'${answerRandomNum}' is wrong answer ;(. Correct answer was ${reversedAnswer}.\nLet's try again, ${name}`);
      break;
    }
  }
}