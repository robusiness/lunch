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

function lunch(school) {
    if (school == null) {
        r.style.setProperty('--visible', inline);
    } else {
        r.style.setProperty('--visible', none);
    }
}

let r = document.querySelector(':root');
let shadowDifference = 120;
let red = 'ff';
let green = 'ff';
let blue = 'ff';
let backgroundColorHex = '#' + red + green + blue;
let backgroundColor = parseInt(backgroundColorHex, 16);
let shadowColor = calculateShadow(red, green, blue, shadowDifference);
let textColor = calculateText(red, green, blue);
let params = new URLSearchParams(window.location.search);
let school = params.get('school');

lunch(school);

r.style.setProperty('--background-color', backgroundColorHex);
r.style.setProperty('--shadow-color', shadowColor);
r.style.setProperty('--text-color', textColor);
