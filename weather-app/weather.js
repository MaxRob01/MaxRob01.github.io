console.log("works");

function getCity() {
	var city = document.getElementById("yourCity").value;
    getWeatherInfo(city);
	console.log(city);
}

async function getWeatherInfo(city) {
	try {
		let response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2a35c7e3ce0d3c6cf840c45396ced43`
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		let data = await response.json();
		console.log("###############the result is:");
		console.log(data);
		return data;
	} catch (error) {
		console.error("Error fetching weather data: ", error);
	}
}

getWeatherInfo(city);
