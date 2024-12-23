const API_key = '0cfa4d842b5e0cb3236d4214d0106e73';
let select = document.querySelector('select');
let id_City = select.value;

apiFetch();

function apiFetch(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id_City}&appid=${API_key}`).then(function (resp) {return resp.json() }).then(function (data) {
    console.log(data);
    console.log(data.weather[0]['icon']);
    //добавляем название города
    document.querySelector('.weather_city').textContent = data.name;
    //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
    document.querySelector('.weather_forecast').innerHTML = 'Температура: ' +Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.weather_wind').innerHTML = 'Скорость ветра: ' + data.wind.speed;
    //Добавляем описание погоды
    document.querySelector('.weather_desc').textContent = data.weather[0]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
    .catch(function () {
        //Обрабатываем ошибки
    });
}

select.addEventListener('change', function (e) {
    id_City = select.value;
    console.log(id_City);
    apiFetch();
})
