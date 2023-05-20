
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;


    const apiKey = 'fbe2c2fdac7fe2e53740d0f700d43424';
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', weatherUrl, true);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
      
        const temperature = response.main.temp;
        const windSpeed = response.wind.speed;
        const humidity = response.main.humidity;

        document.getElementById('temperature').textContent = 'Текущая температура: ' + temperature + '°C';
        document.getElementById('wind').textContent = 'Скорость ветра: ' + windSpeed + ' м/c';
        document.getElementById('humidity').textContent = 'Влажность: ' + humidity + '%';
      }
    };

    xhr.send();
  });
}
