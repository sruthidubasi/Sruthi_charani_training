console.log("Searching Methods"); 
let str = "Hello JavaScript";

console.log(str.indexOf("Java")); 
console.log(str.lastIndexOf("a")); 
console.log(str.includes("J")); 
console.log(str.startsWith("v")); 
console.log(str.endsWith("o")); 

console.log("Trimming Methods");
console.log("string length: ", str.length);
console.log("The trim:",str.trim()+ " The trim length:",str.trim().length);
console.log("THe string original string: ",str,str.length);

console.log("Padding Methods");
var a1='hello'.padStart(9,'ha');
console.log(a1);
var a2='hello'.padStart(7);
console.log(a2);
var a3='hello'.padEnd(7, '*');
console.log(a3);
console.log("Extracting Methods");
let str2 = "JavaScript";

console.log(str2.slice(0, 4));
console.log(str2.substring(4, 10));
let str4 = "Hello";
let str5= "World";

console.log(str4.concat(" ", str5));
console.log("Replacing Methods")
let str6 = "Hello World";

console.log(str6.replace("World", "JavaScript"));
console.log(str6.replaceAll("Hello", "orange"));
console.log("Changing Case Methods");
console.log("convert uppercase:",str.toUpperCase());
console.log("convert lowercase:",str.toLowerCase());