/*
* Author: Joyce Cha <jgcha@ucsc.edu>
* Created: 7 June 2024 
*License: Public Domain
*/
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

$("#problems").append("<button id='button-problems'>Make Special</button>");

$("#button-problems").click(function(){
    $('#problems')
})