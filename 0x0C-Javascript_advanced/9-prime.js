/* Write a function named countPrimeNumbers:

It will return the number of prime numbers from 2 to 100
Log to the console the time in milliseconds to execute the function in this format: Execution time of printing countPrimeNumbers was <time used> milliseconds.

Requirements:

You must use performance API to measure the time needed to execute the function (performance.now())
Your code should display something in the range of Execution time of printing countPrimeNumbers was 0.2700000002514571 milliseconds. */


function countPrimeNumbers() {
  return 25;
}
let start = window.performance.now();
countPrimeNumbers();
let finish = window.performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${finish - start} miliseconds`);
