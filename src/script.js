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
  place.innerHTML = `Current temp is ${roundTem}°C`;
  descriptionElemet.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed) + " m/s";
}

let newCity = document.querySelector("#city-form");
newCity.addEventListener("submit", cityPosition);

//Get description

// Get your weather at your location
function showTemperatureHere1(event) {
  event.preventDefault();
  function showTemperatureHere(response) {
    let tem = Math.round(response.data.main.temp);
    let temp = `Temperature is: ${tem}°C`;
    let currentPlace = document.querySelector("#apiPlace");
    currentPlace.innerHTML = temp;
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

//function convertingFarenheit(event) {
//event.preventDefault();
//let convFar = document.querySelector("#Celsius");
// convFar.innerHTML = ` 60`;
//}
//let convFar = document.querySelector("#Fahrenheit");
//convFar.addEventListener("click", convertingFarenheit);

//function convertingCelsius(event) {
// event.preventDefault();
//let convCels = document.querySelector("#Celsius");
//convCels.innerHTML = ` 15°C`;
//}

//let convCels = document.querySelector("#Celsius");
//convCels.addEventListener("click", convertingCelsius);

// Gives the current date and time
function formatDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentHours = now.getHours();
  let currentMinutes = ("0" + now.getMinutes()).slice(-2);
  let currentDay = days[now.getDay()];
  let forDate = `${currentDay} at ${currentHours}: ${currentMinutes}`;

  let currentDates = document.querySelector("#today");
  currentDates.innerHTML = ` ${forDate}`;

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
console.log(formatDate());
