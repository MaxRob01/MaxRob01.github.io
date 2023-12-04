function getCity() {
	var city = document.getElementById("yourCity").value;
	console.log(city);
	return city;
}

async function getWeatherInfo(city) {
	try {
		let response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b2a35c7e3ce0d3c6cf840c45396ced43`
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		let data = await response.json();

		return data;
	} catch (error) {
		console.error("Error fetching weather data: ", error);
	}
}

async function handleRequest() {
	var city = getCity();
	var weatherInfo = await getWeatherInfo(city);
	insertWeather(weatherInfo);
}

function insertWeather(weatherInfo) {
	var temperture = weatherInfo.main.temp;
	var humidity = weatherInfo.main.humidity;
	var tempMax = weatherInfo.main.temp_max;
	var tempMin = weatherInfo.main.temp_min;
	var feelsLike = weatherInfo.main.feels_like;

	document.getElementById("tempertureMax-value").innerHTML = tempMax;
	document.getElementById("tempertureMin-value").innerHTML = tempMin;
	document.getElementById("feels-like-value").innerHTML = feelsLike;
	document.getElementById("humidity-value").innerHTML = humidity;
	document.getElementById("mainTempCard").innerHTML = temperture;
}
