
var todayLink = document.getElementById("today");


todayLink.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("city").textContent = "Ваш город: Франкфурт";
  document.getElementById("temperature").textContent = "Текущая температура: 25°C";
  document.getElementById("wind").textContent = "Скорость ветра: 10 м/c";
  document.getElementById("humidity").textContent = "Влажность: 70%";

});
