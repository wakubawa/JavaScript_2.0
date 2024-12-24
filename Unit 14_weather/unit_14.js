// NOTE: 'select' - плохой селектор, нужно дать название явно. Мб через id
// NOTE: '.weather_city' и др. классы обычно используются для стилей, ты когда будешь менять стили или имена классов, как ты поймешь что используется в js? 
// NOTE: используй специальный data атрибут например data-role="weather-city". document.querySelectorAll("[data-role='weather-city']")
// NOTE: ну или id document.querySelectorAll("#weather-city") если элемент уникален на странице как в твоем случае.
const API_KEY = '0cfa4d842b5e0cb3236d4214d0106e73';

function getCityId() {
    return document.querySelector('select').value
}

function drawWeather(cityName, tempF, windSpeed, desc, icon) {
    document.querySelector('.weather_city').textContent = cityName;
    document.querySelector('.weather_forecast').innerHTML = `Температура: ${Math.round(tempF - 273)} &deg;`;
    document.querySelector('.weather_wind').innerHTML = `Скорость ветра: ${windSpeed}`;
    document.querySelector('.weather_desc').textContent = desc;
    document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`;
}

function apiFetch(cityId){
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`).
        then(function (resp) { return resp.json() }).
        then(function (data) {
            drawWeather(data.name, data.main.temp, data.wind.speed, data.weather[0]['description'], data.weather[0]['icon'])
        }).
        catch(function () {
            //Обрабатываем ошибки
        });
}

select.addEventListener('change', function (_e) { apiFetch(getCityId()) })

apiFetch(getCityId());
