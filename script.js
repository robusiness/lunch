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
    if (school == 'cems') {
        lunch = ["Sub Sandwich, Chips, Baked Beans", "No School", "No School", "Weekend", "Weekend", "No School", "Chicken Nuggets, Mac N Cheese, Roll, Green Beans", "Hot Dog, Bun, Baked Beans", "Nachos, Taco Meat, Chips, Refried Beans, Toppings OR Pizza Fun Lunch", "Fish Sticks, French Fries, Peas", "Weekend", "Weekend", "Hamburger, Bun, Cheese, Toppings, Baked Beans", "Chicken Alfredo, Chicken, Sauce, Broccoli, Breadstick", "Pizza Dippers, Marinara Sauce, Green Beans", "Chicken & Gravy, Mashed Potatoes, Peas, Roll", "Pancakes, Smiley Fries, Yogurt", "Weekend", "Weekend", "Chicken Cordon Bleu, Bun, Mac N Cheese, Baked Beans", "Mashed Potato Bowl Day! Popcorn Chicken, Mashed Potatoes, Corn, Roll", "Earth Day: Pepperoni Pizza, Peas, Chocolate Pudding Dirt", "Orange Chicken, Rice, Broccoli, Egg Roll, Fortune Cookie", "Grilled Cheese, Tomato Soup, Green Beans", "Weekend", "Weekend", "BBQ Chicken, Bun, Sun Chips, Baked Beans", "Tacos, Taco Meat, Tortilla, Shells, Refried Beans, Toppings", "Stuffed Crust Pizza, Green Beans", "Spaghetti & Meatballs, Marinara Sauce, Alfredo Sauce, Garlic Bread, Broccoli"];
    } else if (school == 'chs') {
        lunch = ["Easter Meal: Turkey, Gravy, Mashed Potatoes, Corn, Roll, Pudding OR Pizza, Corn, Pudding", "No School", "No School", "Weekend", "Weekend", "No School", "Pizza Heaven, Cheese or Sausage, Baked Beans OR Mini Corn Dogs, Seasoned Noodles, Baked Beans", "Hot Dog, Bun, Sun Chips, Carrots OR Japanese Cherry Chicken, Fried Rice, Oriental Vegetables, Potstickers", "BBQ Pork, Bun, Spring Salad OR Chicken Bacon Ranch Wrap, Baked Chips, Spring Salad", "Garlic French Bread Pizza, Corn OR Philly Steak Sub, Corn", "Weekend", "Weekend", "Meatball Sub, Baked Beans, Sun Chips OR Chicken Wings, Baked Beans, Roll", "Chicken Alfredo, Pasta, Chicken, Alfredo Sauce, Breadstick, Broccoli OR Brat, Bun, String Cheese, Smiley Fries, Green Beans", "Orange Chicken, Rice, Broccoli, Egg Roll, Fortune Cookie OR Pizza Burger, Carrots", "Tacos, Taco Meat, Tortilla, Refried Beans, Toppings OR Sausage Pizza, Green Beans", "Grilled Cheese, Tomato Soup, Crackers, Peas OR Hot Beef, Bun, Peas", "Weekend", "Weekend", "Spaghetti Day, Pasta, Meatballs, Marinara or Alfredo, Breadstick, Broccoli OR Chicken Cordon Bleu, Bun, Broccoli", "Sub Sandwich, Toppings, Chips, Baked Beans OR Sloppy Joe, Bun, Chips, Baked Beans", "Earth Day: Meatballs & Gravy, Pasta, Carrots, Roll, Chocolate Pudding Dirt OR Grilled Chicken Breast, Bun, Garden Rice, Carrots, Chocolate Pudding Dirt", "Mashed Potato Bowl, Potatoes, Chicken, Corn, Gravy, Roll", "Pancakes, Sausages, Yogurt OR Pepperoni Pizza, Green Beans", "Weekend", "Weekend", "Chicken Parmesan, Bun, Broccoli OR Personal Pan Pizza, Broccoli", "Homemade Chili, Pasta, Cheddar Cheese, Cornbread, Toppings OR Teriyaki Rice Bowl, Potstickers, Fortune Cookie", "Mini Corn Dogs, Seasoned Noodles, Green Beans OR Calzone, Green Beans", "Chicken & Gravy, Mashed Potatoes, Biscuit, Carrots OR Fairvivor Fries, Fries, Nacho Meat, Toppings"];
    }
    console.log(lunch[date.getDate()-1]);
    document.getElementById('lunch').textContent = lunch[date.getDate()-1];
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
