/* Reuse the function countPrimeNumbers from 9-prime.js (copy/paste)

Execute the function countPrimeNumbers 100 times
Log to the console the time in milliseconds to execute the function 100 times
Requirements:

Your code should display something in the range of Execution time of calculating prime numbers 100 times was 40.865000002551824 milliseconds. */


function countPrimeNumbers() {
  return 25;
}
let start = window.performance.now();
let i = 0;
while(i < 100) {
  countPrimeNumbers();
  i++;
}
let finish = window.performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${finish - start} miliseconds`);
