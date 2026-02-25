// Array Methods
//Adding or Removing Element at Any Position
var colors=["Red", "Green","Blue"];
var removed=colors.splice(0,1);//first removed element
console.log(colors);
console.log(removed);// remove
console.log(removed.length);
//insert
removed=colors.splice(1,0,"Pink","Yellow");
console.log(colors);
console.log(removed);
//join()
console.log(colors.join(" "));
//you can also convert an array to a comma separated string using the toString().
console.log(colors.toString());
//slice() method
var subarr=colors.slice(0,3);
console.log(subarr);
// Array indexOf() and lastIndexOf()
var fruits=["Apple", "Banana","Mango","Orange","papaya"];
console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Mango",1));