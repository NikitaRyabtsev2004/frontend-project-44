import readlineSync from 'readline-sync';


export default function progression() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let i = 0;
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  while (i < 3) {
    const rn1 = randomIntFromInterval(1, 20);
    const rn2 = randomIntFromInterval(1, 10);
    const rn3 = randomIntFromInterval(1, 8);
    let rnSum = rn1;
    let str = '';
    const rnArray = []
    for (let b = 0; b < 9; b += 1) {
      rnArray.push(rnSum)
      str += (`${rnSum}`);
      rnSum += rn2;
    }
    const empty = rnArray[rn3];
    rnArray.push(rnSum);
    rnArray.splice(rn3, 1, '..');
    const str1 = rnArray.join(' ');
    const question = (`Question: ${str1}`);
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const num1 = Number(answer);
    if (num1 === empty) {
      console.log('Correct !')
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      };
    } else if (num1 !== empty) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${empty}.\nLet's try again, ${name}`);
      break;
    };
  };
};
progression();