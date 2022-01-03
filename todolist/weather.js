const API_KEY = "ef77ee7cd07b6409dd659a9fe3f8298a";
const weatherContent = document.querySelector("#weather");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        const span = document.createElement("span");
        span.innerHTML = `${city}  @ ${weather} / ${temp}°C`;
        weatherContent.appendChild(span);
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);