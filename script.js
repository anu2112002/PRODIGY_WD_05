// script.js

const apiKey = '8e3587364ce9947cbf2e1dad6c0b4a53';  // Replace with your OpenWeatherMap API key

document.getElementById('searchButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeatherData(location);
    }
});

function fetchWeatherData(location) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}

function displayWeatherData(data) {
    if (data.cod === 200) {
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('weatherCondition').textContent = `Condition: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    } else {
        alert('City not found. Please enter a valid city name.');
    }
}
