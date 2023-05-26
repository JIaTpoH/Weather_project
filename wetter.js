const todayButton = document.getElementById("today");
const threeDayButton = document.getElementById("3day");
const sevenDayButton = document.getElementById("7day");
const thenDayButton = document.getElementById("10day");


todayButton.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      const apiKey = "fbe2c2fdac7fe2e53740d0f700d43424";
      const weatherUrl =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey;

      const xhr = new XMLHttpRequest();
      xhr.open("GET", weatherUrl, true);

      xhr.onload = function () {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          let city = response.name;
          let temperature = response.main.temp;
          let temperatureInCelsius = (temperature - 273.15).toFixed(0);
          let windSpeed = response.wind.speed;
          let humidity = response.main.humidity;

          document.getElementById("city").textContent = "Текущий город: " + city;
          document.getElementById("temperature").textContent =
            "Текущая температура: " + temperatureInCelsius + "°C";
          document.getElementById("wind").textContent =
            "Скорость ветра: " + windSpeed + " м/c";
          document.getElementById("humidity").textContent =
            "Влажность: " + humidity + "%";
        }
      };
      xhr.send();
    });
  }
});

// threeDayButton.addEventListener("click", function () {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       let latitude = position.coords.latitude;
//       let longitude = position.coords.longitude;

//       const apiKey = "fbe2c2fdac7fe2e53740d0f700d43424";
//       const forecastUrl =
//         "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=" +
//         latitude +
//         "&lon=" +
//         longitude +
//         "&appid=" +
//         apiKey;

//       const xhr = new XMLHttpRequest();
//       xhr.open("GET", forecastUrl, true);

//       xhr.onload = function () {
//         if (xhr.status === 200) {
//           const response = JSON.parse(xhr.responseText);

//           let temperature = response.main.temp;
//           let windSpeed = response.wind.speed;
//           let humidity = response.main.humidity;

//           document.getElementById("temperature").textContent =
//             "Текущая температура: " + temperature + "°C";
//           document.getElementById("wind").textContent =
//             "Скорость ветра: " + windSpeed + " м/c";
//           document.getElementById("humidity").textContent =
//             "Влажность: " + humidity + "%";
//         }
//       };
//       xhr.send();
//     });
//   }
// });


document
  .getElementById("start-animation")
  .addEventListener("click", function () {
    createMeteor(), startAnimation();
  });

function startAnimation() {
  for (let i = 0; i < 50; ++i) {
    setTimeout(createMeteor, i * 250);
  }
}

function createMeteor() {
  const meteor = document.createElement("div");
  meteor.classList.add("meteor");

  const container = document.getElementById("meteor-container");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const startPosition = Math.random() * containerWidth;

  meteor.style.left = startPosition + "px";
  container.appendChild(meteor);

  meteor.addEventListener("animationend", function () {
    container.removeChild(meteor);
  });
}
