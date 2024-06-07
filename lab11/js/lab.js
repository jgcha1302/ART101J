/*
* Author: Joyce Cha <jgcha@ucsc.edu>
* Created: 7 June 2024 
*License: Public Domain
*/

function sortingHat(str) {
    var length = str.length
    var mod = length % 4;
    if (mod == 0) {
        return "Gryffindor";
    }
    else if (mod == 1) {
        return "Ravenclaw";
    }
    else if (mod == 2) {
        return "Slytherin";
    }
    else if (mod == 3) {
        return "Hufflepuff";
    }
    else {
        return "Oh boy! Secret Option 5!";
    }

}

var clickButton = document.getElementById("button")
clickButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into" + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})

