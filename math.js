function add(a,b){
    return a+b;
}
add(5,2)

function multiply(a,b){
    return a*b;
}
multiply(5,2)

function divide(a,b){
    if (b===0){
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}
MediaSourceHandle.export = {add,multiply,divide}; // make available in other files