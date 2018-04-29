function logScope() {
    var localVar = 2;
    
    if (localVar) {
        var localVar = "I'm different";
        console.log("nested localVar: ", localVar);
    }
    
    console.log("logScope localVar: ", localVar);
}

logScope();