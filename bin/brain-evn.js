import readlineSync from 'readline-sync';

export default function eood() {
  // stepOne
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = Math.floor(Math.random() * 100 - 1);
  const questionRandomNum = `Question: ${randomNumber}`;
  console.log(questionRandomNum);
  const answerRandomNum = readlineSync.question('Your answer: ');
  if ((randomNumber % 2 === 0 && answerRandomNum === 'yes') || (randomNumber % 2 !== 0 && answerRandomNum === 'no')) {
    // stepTwo
    console.log('Correct!');
    const randomNumber1 = Math.floor(Math.random() * 100 - 1);
    const questionRandomNum1 = `Question: ${randomNumber1}`;
    console.log(questionRandomNum1);
    const answerRandomNum1 = readlineSync.question('Your answer: ');

    if ((randomNumber1 % 2 === 0 && answerRandomNum1 === 'yes') || (randomNumber1 % 2 !== 0 && answerRandomNum1 === 'no')) {
      // stepThree
      console.log('Correct!');
      const randomNumber2 = Math.floor(Math.random() * 100 - 1);
      const questionRandomNum2 = `Question: ${randomNumber2}`;
      console.log(questionRandomNum2);
      const answerRandomNum2 = readlineSync.question('Your answer: ');

      if ((randomNumber2 % 2 === 0 && answerRandomNum2 === 'yes') || (randomNumber2 % 2 !== 0 && answerRandomNum2 === 'no')) {
        console.log('Correct!');
        console.log('Congratulations, !'); // congatulation
        // end
        // stepThreeEnd
      } else if (answerRandomNum2 === 'yes') {
        const reversedAnswer = 'no';
        console.log(`'${answerRandomNum2}' is wrong answer ;(. Correct answer was ${reversedAnswer}.\nLet's try again, `);
      } else if (answerRandomNum2 === 'no') {
        const reversedAnswer = 'yes';
        console.log(`'${answerRandomNum2}' is wrong answer ;(. Correct answer was ${reversedAnswer}.\nLet's try again, `);
      }
      // stepTwoEnd
    } else if (answerRandomNum1 === 'yes') {
      const reversedAnswer = 'no';
      console.log(`'${answerRandomNum1}' is wrong answer ;(. Correct answer was ${reversedAnswer}.\nLet's try again, `);
    } else if (answerRandomNum1 === 'no') {
      const reversedAnswer = 'yes';
      console.log(`'${answerRandomNum1}' is wrong answer ;(. Correct answer was ${reversedAnswer}.\nLet's try again, `);
    }
    // stepOneEnd
  } else if (answerRandomNum === 'yes') {
    const reversedAnswer = 'no';
    console.log(`'${answerRandomNum}' is wrong answer ;(. Correct answer was ${reversedAnswer}.\nLet's try again, `);
  } else if (answerRandomNum === 'no') {
    const reversedAnswer = 'yes';
    console.log(`'${answerRandomNum}' is wrong answer ;(. Correct answer was ${reversedAnswer}.\nLet's try again, `);
  }
}
