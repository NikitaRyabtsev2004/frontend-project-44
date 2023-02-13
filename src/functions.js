export default function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function correct() {
  console.log('Correct!');
}