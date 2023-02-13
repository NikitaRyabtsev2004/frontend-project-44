import readlineSync from 'readline-sync';
import hello from './cli.js';
import braincalc from '../bin/brain-calc.js';
import braineven from '../bin/brain-even.js';
import brainGcd from '../bin/brain-gcd.js';
import brainprime from '../bin/brain-prime.js';
import brainprogression from '../bin/brain-prog.js';

export default function hello() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
}

