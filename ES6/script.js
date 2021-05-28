/*
    Template Literals
*/

let firstName = "Andrew";
let lastName = "Sapalaran";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let searchResult = 50;

// if searchResult is greater than 0 then display `{searchResult value} result`
// otherwise display `No search result`
let output = `${searchResult > 0 ? `${searchResult} result`: "No search result"}`
console.log(output);
