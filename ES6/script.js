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


// if sortType has no value pass in use default 'Name'
sortBy = (sortType = "Name", users) => {
    console.log("Sorting By: ", sortType);
}

sortBy(); //Passed in no value so use default `Name`
sortBy("Date", []); //Passed in `Date` as value
*/


/*
    Iterating


let fruits = ["apple", "banana", "orange", "cherries", "jackfruit", "guava"];
// console.log("For Loop");
// for(let index = 0; index < fruits.length; index++){
//     console.log(fruits[index]);
// }


// Below are different types of ES6 for loop

// this loop can't really return anything here it's just a for loop
// console.log("For-Of");
// for(let fruit of fruits){
//     console.log(fruit)
// }

// console.log("forEach");
// newFruits = fruits.forEach((fruit, index) => {
//     console.log(`${index} ${fruit}`);
//     return fruit;
// })




console.log("Map");

// This type of loop returns a new array
newFruits = fruits.map((fruit) => {
    return fruit;
}).filter((value) => {
    // filtering out stuff with a value banana
    if (value == "banana") {
        return false;
    }else {
        return true;
    }
})

console.log(newFruits)

*/


/*
 Destructing Object


// let fullName = {
//     firstName: "Andrew",
//     lastName: "Sapalaran"
// }

// const { firstName, lastName } = fullName;
// console.log(firstName);
// console.log(lastName);


let user = [
    {
        firstName: "Default",
        lastName: "User"
    },

    (user) => {
        console.log("I set the user: ", user);
    }
]

// newUser get sets to the first object
// setUser get sets to this function (user) =>{}
let [newUser, setUser] = user;
console.log(newUser);

// calling the setUser which fired off this (user) => function
setUser({ firstName: "John", lastName: "Reilly"})  

*/


/*
    Promises


let promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        // resolve({
        //     firstName: "Andrew",
        //     lastName: "Sapalaran"
        // });

        reject("Something went wrong");
    }, 1000);
})

// This `.then` only runs if it success or resolves
// `.catch` runs if it rejects
promise.then((response) => {
    console.log("Here is the response after 1 second: ");
    console.log(response);
}).catch((error) => {
    console.log(error)
})

console.log("This is part 1")

*/


/*
    Fetching data from an API
*/

// fetch data from this api
let userPromise = fetch("https://randomuser.me/api/ERRORRERROOOREROR");
console.log(userPromise)
userPromise.then((response) => {

    // if promise is resolve console log response in JSON format
    //console.log(response.json()); image 1

    // return response in JSON format
    return response.json();

    
}) 
// first then returns another promise which 
// we have to catch right here
.then((resData) => {
    // console log response data image 2
    console.log(resData)

    // outputting the first and last name
    console.log(resData.results[0].name.first);
    console.log(resData.results[0].name.last);
})
.catch((error) => {
    // console log the error response from JSON
    console.log(error);
})