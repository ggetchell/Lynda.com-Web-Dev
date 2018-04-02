// define several functions
function firstFunction() {
	alert("Just about to call the second function");
    secondFunction();
}
function secondFunction() {
	alert("Just about to call the third function");
    thirdFunction();
}
function thirdFunction() {
	alert("Just about to call the fourth function");
    fourthfunction();
}
function fourthFunction() {
    headline.innerHTML = "You clicked the headline!";
}

// grab the headline element
var headline = document.getElementById("mainHeading");
// add a click event handler
headline.onclick = function() {
	alert("Just about to call first function");
    firstFunction();
    alert("I've called the first function");
};





