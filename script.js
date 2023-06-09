const searchForm = document.getElementById("searchForm");
const content = document.querySelector(".content");
const city = document.querySelector(".location");
const img = document.querySelector(".icon");
const conditions = document.querySelector(".conditions");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feeltemp");
const humidity = document.querySelector(".humidity");
const high = document.querySelector(".high");
let x = 100;

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const apiKey = "[YOUR_API_KEY_HERE]";
    const input = search.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=${apiKey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data =>{
        const {main, name, sys, weather, rain, pressure} = data;
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        city.textContent = `${name}`;
        img.src = `${icon}`;
        conditions.textContent = `${weather[0]["description"]}`;
        temp.textContent = `${Math.round(main.temp)}°C`;
        feelsLike.textContent = `Feels Like: ${Math.round(main.feels_like)}°C`;
        high.textContent = `Daily High: ${Math.round(main.temp_max)}°C`;
        humidity.textContent = `Humidity: ${main.humidity}%`;
    })
    .catch(() => {
        alert("call failed.");
    })

    fadeIn(content);
})


function fadeIn(content){
    var op = 0.1;
    content.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        content.style.opacity = op;
        content.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}