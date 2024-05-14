const apiKey = "YOUR_API_KEY";
const latitude = "24.9551";
const longitude = "67.0665";

var sunsettest = false;

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?&appid=232649f47ca799275342fab1ed4ca4b4&q=${"karachi"}&units=metric`
    );
    const data = await response.json();


    let sunsetval= new Date(data.sys.sunset * 1000).toLocaleTimeString()
    let curentval= new Date(data.dt * 1000).toLocaleTimeString()

    if (sunsetval<curentval){
      console.log(curentval)
      sunsettest = true;
    }

    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
    <div class="top_sec">
            <div class="sec_temp">
            <h2>${data.name}</h2>
            <p>${data.main.temp} °C</p>
            <img class="wether_icon" src="https://openweathermap.org/img/wn/${
              data.weather[0].icon
            }.png" alt="weather icon">
            </div>
            <div class="sec_dis">
            <p>Humidity:<br> ${data.main.humidity} %</p>
            <p>Pressure:<br> ${data.main.pressure} hPa</p>
            <p>Visibility:<br> ${data.visibility} meters</p>
            <p>Cloudiness:<br> ${data.clouds.all} %</p> 
            </div>
    </div>
    <div class="bottom_sec">            
            <p>Time Zone: ${data.timezone / 3600} hours from UTC</p>
            <p>Time: ${new Date(data.dt * 1000).toLocaleTimeString()}</p>
            <p>Sunrise: ${new Date(
              data.sys.sunrise * 1000
            ).toLocaleTimeString()}</p>
            <p>Sunset: ${new Date(
              data.sys.sunset * 1000
            ).toLocaleTimeString()}</p> 
    </div>
            `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
getWeather();

let currenttime = new Date();
console.log(currenttime.getHours());
let testtime = currenttime.getHours();

console.log(sunsettest);
