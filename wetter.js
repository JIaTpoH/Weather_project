const apiKey = "fbe2c2fdac7fe2e53740d0f700d43424";
function getWeatherData() {
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

   fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
    console.log(data);
   })
   .catch(error => {
    console.log("Error", error);
   })
}

getWeatherData();
