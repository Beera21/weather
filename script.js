function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) {
      document.getElementById("weatherResult").innerHTML = "Please enter a city name!";
      return;
    }
  
    const apiKey = "610a6c155d3938a2d348516d20e6eccf"; // Replace with your own if needed
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then(data => {
        const weather = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>🌡️ Temperature: ${data.main.temp} °C</p>
          <p>☁️ Condition: ${data.weather[0].description}</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = weather;
      })
      .catch(error => {
        document.getElementById("weatherResult").innerHTML = "City not found or network error.";
      });
  }
  