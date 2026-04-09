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
    let lunch = null;
    let date = new Date();
    if (school == null) {
        r.style.setProperty('--form-visible', 'inline');
        r.style.setProperty('--lunch-visible', 'none');
    } else {
        r.style.setProperty('--form-visible', 'none');
        r.style.setProperty('--lunch-visible', 'inline');
    }
    if (school == "cems") {
        lunch = ["Sub Sandwich, Chips, Baked Beans", "No School", "No School", "Weekend", "Weekend", "No School", "Chicken Nuggets, Mac N Cheese, Roll, Green Beans", "Hot Dog, Bun, Baked Beans", "Nachos, Taco Meat, Chips, Refried Beans, Toppings OR Pizza Fun Lunch", "Fish Sticks, French Fries, Peas", "Weekend", "Weekend", "Hamburger, Bun, Cheese, Toppings, Baked Beans", "Chicken Alfredo, Chicken, Sauce, Broccoli, Breadstick", "Pizza Dippers, Marinara Sauce, Green Beans", "Chicken & Gravy, Mashed Potatoes, Peas, Roll", "Pancakes, Smiley Fries, Yogurt", "Weekend", "Weekend", "Chicken Cordon Bleu, Bun, Mac N Cheese, Baked Beans", "Mashed Potato Bowl Day! Popcorn Chicken, Mashed Potatoes, Corn, Roll", "Earth Day: Pepperoni Pizza, Peas, Chocolate Pudding Dirt", "Orange Chicken, Rice, Broccoli, Egg Roll, Fortune Cookie", "Grilled Cheese, Tomato Soup, Green Beans", "Weekend", "Weekend", "BBQ Chicken, Bun, Sun Chips, Baked Beans", "Tacos, Taco Meat, Tortilla, Shells, Refried Beans, Toppings", "Stuffed Crust Pizza, Green Beans", "Spaghetti & Meatballs, Marinara Sauce, Alfredo Sauce, Garlic Bread, Broccoli"];
    } else {
        lunch = null;
    }
    console.log(lunch[date.getDate()-1]);
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
