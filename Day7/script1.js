// assignment 1: write a code find(), filter(), sort() only using string and reversed() methods
//1. find()
console.log("Assignment 1: write a code find(), filter(), sort() only using string and reversed() methods");
var numbers = [5, 12, 8, false,130, 44];

var result = numbers.find(function(num) {
  return num > 10;
});

console.log("this is find() an element in array:",result);  
// string find()
var arr1=["Banana","Green","Apple","Ant"];
var result = arr1.find(function(a1) {
  return a1.startsWith("A");
});

console.log(result);
//2. filter() Method
var result = numbers.filter(function(num) {
  return num > 10;
});

console.log("this filter",result);  
var result = arr1.filter(function(a1) {
  return a1.length > 2;
});

console.log("This filter using string array",result);

//3. sort() Method Using String
var fruits = ["Banana", "Orange", "Apple", "Mango"];

var sortedFruits = fruits.sort();

console.log("sort() Method Using String",sortedFruits);
// 4. reverse() Method
var numbers = [1, 2, 3, 4, 5];

var reversed = numbers.reverse();

console.log("reverse() method",reversed);
// reverse of string array
arr1.reverse();
console.log("Reverse method in array using string datatype",arr1);
