fetch('https://api.openweathermap.org/data/2.5/weather?lat=6.465422&lon=3.406448&appid=a56db15c92ec10c2bb29ad83c808f4a8')
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').innerText = data.name;
        document.getElementById('temperature').innerText = Math.round((data.main.temp - 273.1) * 10)/10 + '°';
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('humidity').innerText = data.main.humidity + '%';
        document.getElementById('wind-speed').innerText = data.wind.speed + ' m/s';
        document.getElementById('weather').innerText = data.weather[0].main;
    })
    .catch(err => {
        console.log('error', err);
    })

