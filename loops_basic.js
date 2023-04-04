// 1- Write a program that prints numbers from 1 to 10 using a for loop.
let reem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < reem.length; i++) {
  console.log(reem[i]);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
let reemo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 2; i <= reemo.length; i += 2) {
  console.log(i);
}

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
let reemon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 1;
while (i <= reemon.length) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
let num = "parseInt";
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
let sum = 10;
let j = 1;

while (j <= 100) {
  sum += j;
  j++;
}

console.log("The sum of numbers from 1 to 100 is " + sum);

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
let numtt = "parseIn";
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log("The factorial of " + num + " is: " + factorial);

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log("The factorial of " + num + " is: " + factorial);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
const n = parseInt(prompt("Enter a number: "));
let firstTerm = 0;
let secondTerm = 1;
while (firstTerm + secondTerm <= n) {
  const nextTerm = firstTerm + secondTerm;

  console.log(nextTerm);

  firstTerm = secondTerm;
  secondTerm = nextTerm;
}
// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.
const numbers = [5, 10, 15, 20];
let s = numbers.length - 1;
while (s >= 0) {
  console.log(numbers[s]);

  s--;
}
