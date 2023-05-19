window.addEventListener('load', () => {
    const api_key = 'df2d93b4226b441ab418887defc414f6';

    document.getElementById('get-weather-btn').addEventListener('click', () => {
        const cityInput = document.getElementById('cityname');
        const city = cityInput.value.trim();

        if (city !== '') {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.weather && data.weather.length > 0) {
                        const weatherDescription = data.weather[0].description;
                        const temperature = data.main.temp;
                        const humidity = data.main.humidity;
                        const windSpeed = data.wind.speed;

                        document.getElementById('city').textContent = `Weather in ${city}`;
                        document.getElementById('description').textContent = `Description: ${weatherDescription}`;
                        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
                        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
                        document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;
                    } else {
                        console.log("Weather data not available for the specified city.");
                    }
                })
                .catch(error => {
                    console.log("Error occurred while fetching weather data:", error);
                });
        }
    });
});
