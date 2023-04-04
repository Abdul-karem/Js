// 1-Write a function to find the largest element in an array.
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const myAr = [3, 7, 2, 9, 4, 8, 5, 1, 6];
const largest = findLargest(myAr);
console.log(largest);


// 2-Write a function to find the smallest element in an array.
function findSmallestElement(arr) {
    let smallestElement = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallestElement) {
        smallestElement = arr[i];
      }
    }
  
    return smallestElement;
  }
  const myArra = [2, 5, 1, 8, 3];
  const smallestElement = findSmallestElement(myArra);
  console.log(smallestElement); 
// 3-Write a function to find the sum of all elements in an array.
function sumArrayElements(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  const myArray = [2, 5, 1, 8, 3];
  const sum = sumArrayElements(myArray);
  console.log(sum);
// 4-Write a function to find the average of all elements in an array.
function averageArrayElements(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    const average = sum / arr.length;
  
    return average;
  }
  const myArry = [2, 5, 1, 8, 3];
const average = averageArrayElements(myArry);
console.log(average);
// 5-Write a function to find the median of all elements in an array.
function medianArrayElements(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
  
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
      return sortedArr[middle];
    }
  }
  const myAray = [2, 5, 1, 8, 3];
const median = medianArrayElements(myAray);
console.log(median);
// 6-Write a function to remove all duplicates from an array.
function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
  }
  const myrray = [2, 5, 1, 8, 3, 5, 2, 6, 1];
const newArray = removeDuplicates(myrray);
console.log(newArray);
// 7-Write a function to sort an array in ascending order.
function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  const myArr = [2, 5, 1, 8, 3];
const sortedArray = sortAscending(myArr);
console.log(sortedArray);
// 8-Write a function to sort an array in descending order.
function sortArrayDescending(arr) {
    return arr.sort(function(a, b) {
      return b - a;
    });
  }
  var mArray = [5, 3, 8, 1, 2];
var srtedArray = sortArrayDescending(mArray);
console.log(srtedArray);
// 9-Write a function to shuffle the elements of an array randomly.
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  var myAay = [1, 2, 3, 4, 5];
var shuffledArray = shuffleArray(myAay);
console.log(shuffledArray);

let arr5 = [1, 5, 2, 10, 3];
let shuffledArr = shuffleArray(arr5);
console.log(shuffledArr); 

// function shuffleArray(arr5) {
//     for (let i = arr5.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       let temp = arr5[i];
//       arr5[i] = arr5[j];
//       arr5[j] = temp;
//     }
//     return arr5;
//   }