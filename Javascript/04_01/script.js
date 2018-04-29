// Regular function, called explicitly by name:
function multiply(a,b) {
    var result = a * b;
    console.log(result);
    return result;
}
var multiplied = multiply(3,4);

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function(a,b) {
    var result = a / b;
    console.log(result);
    return result;
}
var divided = divide(3,4);

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function(a,b) {
    var result = a / b;
    console.log(result);
    return result;
}())
var divided = divide(.5, .75);