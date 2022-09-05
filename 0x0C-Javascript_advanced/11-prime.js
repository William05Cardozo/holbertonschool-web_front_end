/* Reuse the function countPrimeNumbers from 10-prime.js (copy/paste)

Log to the console the time in milleseconds to execute the function 100 times
Find a way to actually do most of the calculation at the end of the execution stack
Requirements:

Your code should display something in the range of Execution time of calculating prime numbers 100 times was 0.03999999910593033 milliseconds.
Use setTimeout keyword to change the stack order */


function countPrimeNumbers() {
  return 25;
}
let start = window.performance.now();
let i = 0;
while(i < 100) {
  console.log(countPrimeNumbers());
  i++;
}
let finish = window.performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${finish - start} miliseconds`);
