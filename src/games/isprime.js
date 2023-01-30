import readlineSync from 'readline-sync';

export default function isPr() {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let b = 0;
  const answerNo = 'no';
  const answerYes = 'yes';
  const array = [];
  while (b < 3) {
    const rn1 = randomIntFromInterval(2, 99);
    if (rn1 > 1) {
      for (let i = 2; i < rn1; i += 1) {
        if (rn1 % i === 0) {
          array.push(1);
        };
      }
      array.push(2);
    } else {
      array.push(3);
    };
    const question = (`Question: ${rn1}`);
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && array.length === 1) || (answer === 'no' && array.length > 1)) {
      b += 1;
      console.log('Correct !');
      if (b === 3) {
        console.log('Congratulations !');
      }
    } else if (((answer === 'no') || (answer === '')) && array.length === 1) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${answerYes}.\nLet's try again, `);
      break;
    } else if (((answer === 'yes') || (answer === '')) && array.length > 1) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${answerNo}.\nLet's try again, `);
      break;
    }
    array.length = 0;
  };
};
