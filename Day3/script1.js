// Assignment: generate evenNumbers and oddNumbers arrays by using the loops
var evenNumbers=[];
var oddNumbers=[];
var n=100;
for(let i=0;i<=100;i++){
    if(i%2===0){
        evenNumbers.push(i);
    }else{
        oddNumbers.push(i);
    }
}
console.log("Even Numbers ",evenNumbers);
console.log("Odd Numbers ",oddNumbers);