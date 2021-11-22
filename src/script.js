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
  document.body.container = "#f00";
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
  getForcast(response.data.coord);
}

let newCity = document.querySelector("#city-form");
newCity.addEventListener("submit", cityPosition);

function getForcast(coordinates) {
  console.log(coordinates);
  let apiKey = "69181bdb9d5f82f38a07c3cf8a85b271";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exlude={part}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForcast);
}

function displayForcast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast-weather");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index > 0 && index < 5) {
      forecastHTML =
        forecastHTML +
        ` 
          <div class="col-3">
            <ul class="forcast">
                <li class="forcast-temperature" id="apiPlace">
                <strong>
                 <li class="card-text" id="tomorrow">${formatDay(
                   forecastDay.dt
                 )}</li>
                 </strong>
                  <span class="forcast-temperature-min">${Math.round(
                    forecastDay.temp.min
                  )}°C  -</span
                  ><strong><span class="forcast-temperature-max"> ${Math.round(
                    forecastDay.temp.max
                  )}°C</span>
                </li>
         </strong>
              <img
                src="http://openweathermap.org/img/wn/${
                  forecastDay.weather[0].icon
                }@2x.png"
                class="card-img-top"
                alt="Weather"
              />
              <li id="description_tomorrow"></li>
              <li id="wind_tomorrow"></li>
            </ul>
          </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

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
}

function formatDay(time) {
  let date = new Date(time * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[day];
}

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

/// create bookmark

function CreateBookmark() {
  let browser = prompt("What browser du you have?");
  var text = browser.toUpperCase();
  if (text === "CHROME") {
    alert(`Three easy steps to get this page to appear when you click HOME:

    1. At the top right, click Update and then Settings 
    2. Under Appearance, turn on Show Home button.
    3. Choose to use New Tab page 💚
    
    Then you have YOUR WEATHER as your new home page!`);
  } else {
    alert("Sorry we don`t support that browser..");
  }
}

let bookmark = document.querySelector("#bookmark");
bookmark.addEventListener("click", CreateBookmark);
