function calculateShadow(red, green, blue, dif) {
    function calculateDifference(colorHex, dif) {
        let convertedDecimal = parseInt(colorHex, 16);
        let finalDecimal;
        if (convertedDecimal < 127.5) {
            finalDecimal = convertedDecimal + dif;
        } else {
            finalDecimal = convertedDecimal - dif;
        }
        if (finalDecimal <= 16) {
            return '0' + finalDecimal.toString(16);
        } else {
            return finalDecimal.toString(16);
        }
    }
    red = calculateDifference(red, dif);
    green = calculateDifference(green, dif);
    blue = calculateDifference(blue, dif);
    return '#' + red + green + blue;
}

function calculateText(red, green, blue) {
    function calculateDifference(colorHex) {
        let convertedDecimal = parseInt(colorHex, 16);
        let finalDecimal = 255 - convertedDecimal;
        if (finalDecimal <= 16) {
            return '0' + finalDecimal.toString(16);
        } else {
            return finalDecimal.toString(16);
        }
    }
    red = calculateDifference(red);
    green = calculateDifference(green);
    blue = calculateDifference(blue);
    return '#' + red + green + blue;
}

function updateTime() {
    let now = new Date();
    let time = now.toLocaleTimeString('en-US', {hour12: true});
    document.getElementById('time').textContent = time;
    if (time == '12:00:00 AM') {
        location.reload();
    }
}

async function getWeather() {
    const pointRes = await fetch('https://api.weather.gov/points/44.0311,-88.1421');
    const pointData = await pointRes.json();
    const forecastUrl = pointData.properties.forecastHourly;
    const forecastRes = await fetch(forecastUrl);
    const forecastData = await forecastRes.json();
    document.getElementById('weaImg').setAttribute('src', forecastData.properties.periods[0].icon);
    document.getElementById('temp').textContent = forecastData.properties.periods[0].temperature + '°F'
    document.getElementById('shortDes').textContent = forecastData.properties.periods[0].shortForecast
    document.getElementById('windSpeed').textContent = forecastData.properties.periods[0].windSpeed
    document.getElementById('windDir').textContent = forecastData.properties.periods[0].windDirection
}

function dateTimer(firstDate, numberOfDays, elementId) {
    let startDate = new Date(firstDate);
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let dateDiff = Math.abs(startDate - date)/86400000;
    document.getElementById(elementId).textContent = numberOfDays - dateDiff;
}

function lunch() {
    let lunchMS = ["Weekend", "No School", "Chicken Nuggets, Mac N Cheese, Roll, Green Beans", "Hot Dog, Bun, Baked Beans", "Nachos: Taco Meat, Chips, Refried Beans, Toppings OR Pizza Fun Lunch", "Fish Sticks, French Fries, Peas"]
    let lunchHS = ["Weekend", "No School", "Pizza Heaven: Cheese or Sausage, Baked Beans OR Mini Corn Dogs, Seasoned Noodles, Baked Beans", "Hot Dog, Bun, Sun Chips, Carrots OR Japanese Cherry Chicken, Fried Rice, Oriental Vegetables, Potstickers", "BBQ Pork, Bun, Spring Salad OR Chicken Bacon Ranch Wrap, Baked Chips, Spring Salad", "Garlic French Bread Pizza, Corn OR Philly Steak Sub, Corn"]
    let date = new Date();
    document.getElementById("lunchMS").textContent = lunchMS[date.getDay()];
    document.getElementById("lunchHS").textContent = lunchHS[date.getDay()];
}

let r = document.querySelector(':root');
let shadowDifference = 120;
let red = '10';
let green = '10';
let blue = '10';
let backgroundColorHex = '#' + red + green + blue;
let backgroundColor = parseInt(backgroundColorHex, 16);
let shadowColor = calculateShadow(red, green, blue, shadowDifference);
let textColor = calculateText(red, green, blue);

dateTimer('2026-03-31T00:00:00', 28, 'avocadoes');
setInterval(updateTime, 1000);
setInterval(getWeather, 1000);
setInterval(lunch, 1000);
r.style.setProperty('--background-color', backgroundColorHex);
r.style.setProperty('--shadow-color', shadowColor);
r.style.setProperty('--text-color', textColor);