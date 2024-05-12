const apiKey = "YOUR_API_KEY";
const latitude = "24.9551";
const longitude = "67.0665";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?&appid=232649f47ca799275342fab1ed4ca4b4&q=${"karachi"}&units=metric`
    );
    const data = await response.json();

    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `
    <div class="top_sec">
            <div class="sec_temp">
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].main}</p>
            </div>
            <div class="sec_dis">
            <p>Humidity: ${data.main.humidity} %</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
            </div>
    </div>
    <div class="bottom_sec">
            <p>Visibility: ${data.visibility} meters</p>
            <p>Cloudiness: ${data.clouds.all} %</p> 
            <p>Time Zone: ${data.timezone / 3600} hours from UTC</p>
            <p>Time: ${new Date(data.dt * 1000).toLocaleTimeString()}</p>
            <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p> 
    </div>
            `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();
