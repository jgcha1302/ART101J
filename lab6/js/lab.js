// index.js - purpose and description here
// Author: Your Name
// Date:

// Define Variables
myTransport = ["New Flyer", "walk", "metro bus"]

//create an object for my main ride
myMainRide = {
    make : "New Flyer",
    model : "D40LF",
    color : "white",
    year : "1998",
//
//
    age : function() {
        return 2024 - this.year;
    }

}

//output
document.writeln("Kinds of transport I use:", myTransport, "</br>");
// this little trick allows to write an object to the doc
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "<pre>");
