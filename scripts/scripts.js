document.getElementById("getWeather").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const apiKey = "265364f632c949a290812803240207";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherDiv = document.getElementById("weather");
      if (data.error) {
        weatherDiv.innerHTML = `<p>City not found</p>`;
      } else {
        const temp = data.current.temp_c;
        const condition = data.current.condition.text;
        weatherDiv.innerHTML = `<h2>${data.location.name}</h2><p>${temp}°C, ${condition}</p>`;
      }
    })
    .catch((error) => console.error("Error fetching weather data:", error));
});
