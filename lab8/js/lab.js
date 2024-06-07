/*
* Author: Joyce Cha <jgcha@ucsc.edu>
* Created: 6 June
*License: Public Domain
*/

//Variables

var testArray =[6,15,23,100]

//Functions

function multiplyBy2(x){
    var results = x * 2;
    return results;
}

function chirp(x){
    return"Chirped " + x + "times"; 
}

//output

console.log(testArray.map(add10));

testArray.map(function(x){
    var results = x *2; 
    return results;
})

var mapResults =testArray.map(add10);
console.log("Results:", mapResults);

console.log(add10(100));
console.log(chirp(5));
console.log(multiplyBy2(3));