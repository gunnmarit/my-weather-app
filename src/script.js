//Get the city value that is scearch for at make a new headline
function citySearch(event) {
  event.preventDefault();
  let searchPlaces = document.querySelector("#city-input");
  let newPlace = document.querySelector("h1");
  newPlace.innerHTML = `Your Weather in ${searchPlaces.value}!`;
}
let form = document.querySelector("#city-form");
form.addEventListener("submit", citySearch);

// API temperature today for search city

function cityPosition() {
  let apiKey = "69181bdb9d5f82f38a07c3cf8a85b271";
  let cityName = document.querySelector("#city-input");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTempSearchCity);
}

function showTempSearchCity(response) {
  let roundTem = Math.round(response.data.main.temp);
  let place = document.querySelector("#apiPlace");
  let descriptionElemet = document.querySelector("#description_today");
  let windElement = document.querySelector("#wind_today");
  let currentDates = document.querySelector("#today");
  let iconElement = document.querySelector("#icon");
  celsiusTemperature = response.data.main.temp;

  place.innerHTML = `Temperature is ${roundTem}°C`;
  descriptionElemet.innerHTML = response.data.weather[0].description;
  windElement.innerHTML =
    "Wind: " + Math.round(response.data.wind.speed) + " m/s";
  currentDates.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

let newCity = document.querySelector("#city-form");
newCity.addEventListener("submit", cityPosition);

// Gives the current date and time
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = ("0" + date.getMinutes()).slice(-2);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `Updated at ${day} ${hours}: ${minutes}`;

  let tomorrowDay = days[now.getDay() + 1];
  let tomorrowDates = document.querySelector("#tomorrow");
  tomorrowDates.innerHTML = ` ${tomorrowDay}`;

  let tomorrow2Day = days[now.getDay() + 2];
  let tomorrow2Dates = document.querySelector("#tomorrow2");
  tomorrow2Dates.innerHTML = ` ${tomorrow2Day}`;

  let nextWeekDay = days[now.getDay() + 3];
  let nextWeekDates = document.querySelector("#nextWeek");
  nextWeekDates.innerHTML = ` ${nextWeekDay}`;
}
//console.log(formatDate());

// Get your weather at your location
function showTemperatureHere1(event) {
  event.preventDefault();
  function showTemperatureHere(response) {
    let currentPlace = document.querySelector("#apiPlace");
    currentPlace.innerHTML =
      "Temperature is: " + Math.round(response.data.main.temp) + "°C";
    let yourPlace = document.querySelector("h1");
    yourPlace.innerHTML = `The weather at your location!`;
  }

  function tempPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "69181bdb9d5f82f38a07c3cf8a85b271";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperatureHere);
  }
  navigator.geolocation.getCurrentPosition(tempPosition);
}

let mineLocation = document.querySelector("#currentLocation");
mineLocation.addEventListener("click", showTemperatureHere1);

function favorite1(event) {
  event.preventDefault();
  let searchFavorite1 = document.querySelector("#favorite1Buttons");
  let favoriteSearch1 = document.querySelector("h1");
  favoriteSearch1.innerHTML = `Your Weather in ${searchFavorite1.value} Hemsedal!`;
}

let formFavorite = document.querySelector("#favorite1Buttons");
formFavorite.addEventListener("click", favorite1);

function favorite2(event) {
  event.preventDefault();
  let searchFavorite2 = document.querySelector("#favorite2Buttons");
  let favoriteSearch2 = document.querySelector("h1");
  favoriteSearch2.innerHTML = `Your Weather in ${searchFavorite2.value} Bergen!`;
}

let formFavorite2 = document.querySelector("#favorite2Buttons");
formFavorite2.addEventListener("click", favorite2);

//Converting Fahrenheit and Celsius
function displayFahreinheit(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  let currentPlace = document.querySelector("#apiPlace");
  currentPlace.innerHTML =
    "Temperature is: " + Math.round(fahrenheitTemperature) + "°F";
}
let celsiusTemperature = null;
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahreinheit);

function displayCelsius(event) {
  event.preventDefault();
  let celsiusTemperatureConvert = document.querySelector("#apiPlace");
  celsiusTemperatureConvert.innerHTML =
    "Temperature is: " + Math.round(celsiusTemperature) + "°C";
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsius);
