var myArray = [500,500,500,500,500, 234, 567, 453, 786];

var total = 0;

for ( var i = 0 ; i < myArray.length ; i++ ) {
    // add the current element to the total	
    total = total + myArray[i];
}

// after we're done with the loop
alert("The total is: " + total);

