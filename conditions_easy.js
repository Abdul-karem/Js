// 1- Write a program that asks the user to enter two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
let x = 15;
let y= 12
if (x>10 && y>10 ) {
  console.log("Both numbers are greater than 10");
} else {
  console.log("Either x or y is undefined or null");
}



// 2- Write a program that asks the user to enter a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
let user = 'abdulKareem';
let password ='2223';
if (user=== 'abdulKareem' && password==='2223' ) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}


// 3- Write a program that asks the user to enter a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
let num=20.5;

if (num >= 10 && num <= 20 ) {
  console.log("The number is between 10 and 20");
} else {
  console.log("The number is not between 10 and 20");
}


// 4- Write a program that asks the user to enter their age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".

let icense =true ;
let age =18;

if (icense=== true && age >=18 ) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}
// 5- Write a program that asks the user to enter a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
let nulle=20.5;

if (nulle > 10 && nulle < 0 ) {
  console.log("Invalid number");
} else {
  console.log("Valid number");
}

// 6- Write a program that asks the user to enter a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".
let oop=10;

if (oop <= 5 && oop <= 10 ) {
  console.log("The number is valid");
} else {
  console.log("The number is not valid");
}


// 7- Write a program that asks the user to enter a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".
let passwor ="secret";
let passss='password';
if (passwor === "secret" || passss==='password' ) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}



// 8- Write a program that asks the user to enter a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
let pass =4;

if (pass>0 &&  pass <=100 && pass % 2 === 0 ) {
  console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}




// 9- Write a program that asks the user to enter two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".
let brt=3;
let bnt=2;
if (brt>=0 || bnt <=0 ) {
  console.log("Both numbers are positive");
} else {
  console.log("At least one number is negative");
}


// 10- Write a program that asks the user to enter their age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
const agee=18;
const student=true;
if (agee<18 || student ===true ) {
  console.log("You qualify for a discount");
} else {
  console.log("You do not qualify for a discount");
}
