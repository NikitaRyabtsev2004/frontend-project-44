import readlineSync from 'readline-sync';
import hello from './cli.js';
import calculator from '../bin/brain-calc.js';

export default function brainGame() {
  hello();
  const gameName = readlineSync.question('game - ');
  if (gameName === 'calculator') {
    calculator()
  } else {
    console.log('error')
  }
}