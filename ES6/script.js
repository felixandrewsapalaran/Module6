/*
    Template Literals


let firstName = "Andrew";
let lastName = "Sapalaran";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let searchResult = 50;

// if searchResult is greater than 0 then display `{searchResult value} result`
// otherwise display `No search result`
let output = `${searchResult > 0 ? `${searchResult} result`: "No search result"}`
console.log(output);

*/

/*
    Arrow Functions


// // Simple function
// function getFullName() {
//     let firstName = "Felix";
//     let lastName = "Sapalaran";
//     return `${firstName} ${lastName}`;
// }


// Arrow function
getFullName = () => {
    let firstName = "Andrew";
    let lastName = "Sapalaran";
    return `${firstName} ${lastName}`;
}

console.log(getFullName());



let firstName = "G-boy";
let lastName = "Labitoria";

// Arrow function shorter version
getFullNameShorter = (firstName, lastName) =>
console.log(`${firstName} ${lastName}`);

// call the function and pass the required parameter
getFullNameShorter(firstName, lastName);

*/


/*
 Default Parameters
*/

// if sortType has no value pass in use default 'Name'
sortBy = (sortType = "Name", users) => {
    console.log("Sorting By: ", sortType);
}

sortBy(); //Passed in no value so use default `Name`
sortBy("Date", []); //Passed in `Date` as value