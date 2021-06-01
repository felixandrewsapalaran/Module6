/**
 * Weather App
 * DONE: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT:Use template literals to create a url with input and an API key
 const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
 // console log to see if it works
 //console.log(FULL_URL);
  //CODE GOES HERE

  //use fetch() to return JSON promise
  const weatherPromise = fetch(FULL_URL);
  
  // add return response.json() here to inside our function
  return weatherPromise.then((response) => {
      //console log response to make sure it working as expected
      //console.log(response);

      // return a promise together with the data
      return response.json();
  })
}

// call the function
//getWeatherData("Union");

console.log(getWeatherData("Union"));

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  
}

