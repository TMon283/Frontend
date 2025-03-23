let weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};
function searchWeather() {
    let cityInput = document.getElementById("city-input").value.trim().toLowerCase();
    let resultDiv = document.getElementById("weather-result");

    if (weatherData[cityInput]) {
        let weather = weatherData[cityInput];
        document.getElementById("city-name").innerText = cityInput.charAt(0).toUpperCase() + cityInput.slice(1);
        document.getElementById("weather-icon").innerText = weather.icon;
        document.getElementById("temperature").innerText = `Nhiệt độ: ${weather.temperature}°C`;
        document.getElementById("description").innerText = `Thời tiết: ${weather.description}`;
        document.getElementById("humidity").innerText = `Độ ẩm: ${weather.humidity}%`;
        document.getElementById("wind-speed").innerText = `Tốc độ gió: ${weather.windSpeed} km/h`;
        resultDiv.classList.remove("d-none");
    } else {
        alert("Không tìm thấy thành phố trong dữ liệu!");
        resultDiv.classList.add("d-none");
    }
}