console.log("Here is : ", "array");

/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
console.log("Q1");
[1, 7, 9, 45][("Str", "alex", "moh")][("the", "fox", "over", 'lazy', "dog")];

2;
// What the index of "Banana","Tomato"
console.log("Q2");

var fruits = ["Tomato", "Banana", "Watermelon"];

var index = fruits.indexOf("Tomato");
console.log(index);

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
console.log("Q3");
var Food = ["kabsa", "mansaf", "kabsa", "mansaf"];
var Sport = ["Football", "martialArts", "Football", "martialArts"];
var Movie = ["John Wick", "The Matrix", "The Dark Knight", "Jason Bourne"];
console.log(Food, Sport, Movie);
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
console.log("Q4");

function firstOfArray(aee) {
  return aee[0];
}
var momo = [1, 2, 3, 4, 5];
var first = firstOfArray(momo);
console.log(first);

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
console.log("Q5");

function firstOfArray(aee) {
  return aee[4];
}
var momo = [1, 2, 3, 4, 5];
var last = firstOfArray(momo);
console.log(last);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
console.log("Q6");
var array = [0, 5, 7, 9];
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.pop();
array.push(10);
array = array.filter(function (value) {
  return value !== 5 && value !== 7;
});
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
console.log("Q7");
var arra = [0, 5, 7, 9];
arra.shift();
arra.unshift(9, -7);
arra.pop();
arra.push(3.5);
arra = arra.filter(function (value) {
  return value !== 7;
});
console.log(arra);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
console.log("Q8");
function middleOfArray(kkj) {
  if (kkj.length % 2 === 0) {
    var dee = kkj.length / 2;
    return [kkj[dee - 1], kkj[dee]];
  } else {
    var dee = Math.floor(kkj.length / 2);
    return kkj[dee];
  }
}
var dool = [1, 3, 5, 6, 7, 9];
console.log(middleOfArray(dool));
// var dee =0;
// for (var i=0 ; i< kkj.length;i++ ){
// dee+=kkj[i];
// }
// return dee/kkj.length;
// }
// let nan =[2,4,6,3,8,10,5];
// const average = middleOfArray(nan);{
//   Math.floor(average)
// }
// console.log (Math.floor(average))

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
console.log("Q9");
var animals = ["cat", "ele", "bird"];
animals = ["zebra", "elephant"];
console.log(animals);
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
console.log("Q10");
function nans(you, ggy) {
  return you[ggy];
}

var yo = [1, 2, 3, 8, 9];
console.log(nans(yo, 3));
console.log(nans(yo, 1));
console.log(nans(yo, 4));
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
console.log("Q11");
function addToEnd(http) {
  return http.slice(0, -1);
}
var nums = [1, 2, 3, 8, 9];
console.log(addToEnd(nums));
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
console.log("Q12");
function addToEn(htt, ool) {
  htt.push(ool);

  return htt;
}
var num = [1, 2, 3, 8, 9];

console.log(addToEn(num, 55));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("Q13");
// for
function sumArray(ftf) {
  let hun = 0;
  for (let i = 0; i < ftf.length; i++) {
    hun += ftf[i];
  }
  return hun;
}
var nums = [1, 2, 3, 8, 9];
const total = sumArray(nums);
console.log(total);
// while
function sumArray(ftf) {
  let hun = 0;
   let i=0;
  while ( i < ftf.length) {
    hun += ftf[i];
    i++
  }
  return hun;
}
var nums = [1, 2, 3, 8, 9];
const tota = sumArray(nums);
console.log(tota);                                  

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

console.log("Q14");
// for
  function  minInArray(jjk){
    let vip=jjk[0];
for(let i=1; i<jjk.length ; i++){
  if (jjk[i] < vip) {
    vip = jjk[i];
  }

}
return vip;
  }
  var nums= [1,2,3,8,9]
  let vip =minInArray(nums)
  console.log(vip)
// while
function minInArray(arr) {
  let i = 0;
  let minValue = arr[0];
  while (i < arr.length) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    i++;
  }
  return minValue;
}
const myArray = [1, 2, 3, 8, 9];
const minVal = minInArray(myArray);
console.log(minVal);

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("Q15");
// for
function removeFromArray(arr, elem) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== elem) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

var numsu = [1, 2, 3, 8, 9];
var resul = removeFromArray(numsu, 8);
console.log(resul); 
// while
function removeFromArray(arr, elem) {
  var newArray = [];
  var i = 0;
  while (i < arr.length) {
    if (arr[i] !== elem) {
      newArray.push(arr[i]);
    }
    i++;
  }
  return newArray;
}

var nums = [1, 2, 3, 8, 9];
var result = removeFromArray(nums, 8);
console.log(result); 



/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("Q16");
// for
function oddArray(arr) {
  var oddArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArray.push(arr[i]);
    }
  }
  return oddArray;
}

var nus = [1, 2, 3, 8, 9];
var reult = oddArray(nus);
console.log(reult);
// while
function oddArray(arr) {
  var oddArray = [];
  var i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
      oddArray.push(arr[i]);
    }
    i++;
  }
  return oddArray;
}

var nums = [1, 2, 3, 8, 9];
var result = oddArray(nums);
console.log(result);

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("Q17");
function aveArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

var nums = [1, 2, 3, 8, 9];
var result = aveArray(nums);
console.log(result);
// while
function aveArray(arr) {
  var sum = 0;
  var i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum / arr.length;
}

var nums = [1, 2, 3, 8, 9];
var result = aveArray(nums);
console.log(result);
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("Q18");
function shorterInArray(arr) {
  var shortest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  return shortest;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
var result = shorterInArray(strings);
console.log(result);
// while
function shorterInArray(arr) {
  var shortest = arr[0];
  var i = 1;
  while (i < arr.length) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
    i++;
  }
  return shortest;
}

var string = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
var esult = shorterInArray(string);
console.log(esult);
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("Q19");
function repeatChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

var string = "alex mercer madrasa rashed2 emad hala";
var result = repeatChar(string, 'a');
console.log(result);
// while
function repeatChar(str, char) {
  var count = 0;
  var i = 0;
  while (i < str.length) {
    if (str.charAt(i) === char) {
      count++;
    }
    i++;
  }
  return count;
}

var string = "alex mercer madrasa rashed2 emad hala";
var result = repeatChar(string, 'a');
console.log(result);
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("Q20");
function evenIndexOddLength(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i].length % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
var result = evenIndexOddLength(strings);
console.log(result);
// while
function evenIndexOddLength(arr) {
  var result = [];
  var i = 0;
  while (i < arr.length) {
    if (i % 2 === 0 && arr[i].length % 2 !== 0) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
var result = evenIndexOddLength(strings);
console.log(result); 

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("Q21");
function powerElementIndex(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(Math.pow(arr[i], i));
  }
  return result;
}

var nums = [44, 5, 4, 3, 2, 10];
var result = powerElementIndex(nums);
console.log(result);
// while
function powerElementIndex(arr) {
  var result = [];
  var i = 0;
  while (i < arr.length) {
    result.push(Math.pow(arr[i], i));
    i++;
  }
  return result;
}

var nums = [44, 5, 4, 3, 2, 10];
var result = powerElementIndex(nums);
console.log(result); 

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log("Q22");
function evenNumberEvenIndex(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
var result = evenNumberEvenIndex(nums);
console.log(result);
// while
function evenNumberEvenIndex(arr) {
  var result = [];
  var i = 0;
  while (i < arr.length) {
    if (i % 2 === 0 && arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
    i++;
  }
  return result;
}

var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
var result = evenNumberEvenIndex(nums);
console.log(result);

let x=5;
let y=10;
x=x+y;
y=x-y;
x=x-y;
console.log(x,y)

