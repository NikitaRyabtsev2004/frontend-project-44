import readlineSync from 'readline-sync';
import calculator from '../bin/brain-calc.js';
import evenOrOdd from '../bin/brain-even.js';

export default function brainGame() {
  const game = readlineSync.question('');
  if (game === 'brain-even') {
    evenOrOdd();
  } else if (game === 'brain-calc') {
    calculator();
  }
}