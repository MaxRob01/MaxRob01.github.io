console.log('works')

var city = document.getElementById(yourCity)


async function getWeatherInfo (city) {
    try {
        let theWeather = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2a35c7e3ce0d3c6cf840c45396ced43')
    } catch (err) {
    console.error('did not work')
 }
}




