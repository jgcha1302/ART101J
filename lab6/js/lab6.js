/*
* Author: Joyce Cha <jgcha@ucsc.edu>
* Created: 26 May 
*License: Public Domain
*/


// Define Variables
myMainRide = {
    make : "New Flyer",
    model : "D40LF",
    color : "white",
    year : 1998,
    //defen a function and value of the year within your object 
    age : function() {
        return 2024 - this.year;
    }
}

// output
document.writeln("Kind of transportation I use:", myTransport, "</br");
//write an object
document.writeln("My Main Ride : <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
