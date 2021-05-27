/*
Let & Const
*/


// Let example
function letVarExample(){

    if (true) {
        
        var firstName = "Andrew"; // exists in function scope, defined in function scope
        let lastName = "Sapalaran"; // exists in block scope only, defined in block scope

        // You can only access lastName value inside this block
        console.log("Function Scope Access: ",lastName);
    }

    console.log("Function Scope Access: ", firstName);
    //console.log("Function Scope Access: ",lastName); // Error: wont be able to access lastName value in this scope
}

letVarExample()


// Const example 1
// initiliazing const 
const name = "Andrew";
// try changing constant value
name = "Andrew E";
console.log(name); // Error: cant change value of a constant variable


// Const example 2
const array = [1, 2, 3];
array.push(4); //adding 4 at the end of the array
console.log(array); // this works because the address in memory didn't change it just expand

