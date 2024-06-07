/*
* Author: Joyce Cha <jgcha@ucsc.edu>
* Created: 26 May 
*License: Public Domain
*/
// sortUserName - a function that takes user input and sorts the letters
function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.")
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArray =", nameArraySort);
    //join array
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

//output 
document.written("Oh hey, I've fixed your name:",
    sortUsername(), "</br>");

