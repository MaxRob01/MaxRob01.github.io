// Add logic to submit on enter press
document
	.getElementById("yourCity")
	.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			handleRequest();
		}
	});

function getCity() {
	var city = document.getElementById("yourCity").value;
	city = city.charAt(0).toUpperCase() + city.slice(1);
	document.getElementById("title").innerHTML = city;
	document.getElementById("yourCity").value = "";
	return city;
}

async function getWeatherInfo(locationData, type) {
	try {
		let response;
		if (type == "city") {
			response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${locationData}&units=metric&appid=b2a35c7e3ce0d3c6cf840c45396ced43`
			);
		} else if (type == "coords") {
			response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.latitude}&lon=${locationData.longitude}&units=metric&appid=b2a35c7e3ce0d3c6cf840c45396ced43`
			);
		}
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		let data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Error fetching weather data: ", error);
	}
}

async function handleRequest() {
	var city = getCity();
	var weatherInfo = await getWeatherInfo(city, "city");
	insertWeather(weatherInfo);
}

function insertWeather(weatherInfo) {
	var temperture = weatherInfo.main.temp;
	var humidity = weatherInfo.main.humidity;
	var tempMax = weatherInfo.main.temp_max;
	var tempMin = weatherInfo.main.temp_min;
	var feelsLike = weatherInfo.main.feels_like;
	var weatherIcon = weatherInfo.weather[0].icon;
	var icon = `<img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" width="80px" height="80px" alt="">`;

	document.getElementById("tempertureMax-value").innerHTML = tempMax;
	document.getElementById("tempertureMin-value").innerHTML = tempMin;
	document.getElementById("feels-like-value").innerHTML = feelsLike;
	document.getElementById("humidity-value").innerHTML = humidity;
	document.getElementById("mainTempCard").innerHTML = temperture;
	document.getElementById("iconWeather").innerHTML = icon;
}

var map = L.map("map").setView([0, 0], 1);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function getlatLong(ev) {
	var latLong = { latitude: ev.latlng.lat, longitude: ev.latlng.lng };
	return latLong;
}

map.on("click", handleClickOnMap);

async function handleClickOnMap(ev) {
	var latLng = getlatLong(ev);
	document.getElementById("title").innerHTML = "Weather";
	var weatherInfo = await getWeatherInfo(latLng, "coords");

	insertWeather(weatherInfo);
}
