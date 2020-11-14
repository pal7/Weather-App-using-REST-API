/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api from openweather map


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=celsius
 * q - query param - accepts a city name
 * appid = api key
 * units param - imperial
 */
getWeatherData = (city) => {
  let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`
  let weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) =>{ return response.json(); })
}


/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
getWeatherData(city)
    .then((responseData) => { showWeatherData(responseData); })
    .catch((error) => {console.log(error);})
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  console.log(weatherData);
  document.getElementById('city-name').innerHTML = weatherData.name + ", " + weatherData.sys.country;
  document.getElementById('weather-type').innerHTML = weatherData.weather[0].description;
  document.getElementById('temp').innerHTML = weatherData.main.temp;
  document.getElementById('min-temp').innerHTML = weatherData.main.temp_min;
  document.getElementById('max-temp').innerHTML = weatherData.main.temp_max;
}

