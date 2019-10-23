function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

var currentDate = new Date();
var currentDateString;

// get day of week
var weekDayNumber = currentDate.getDay();


var daysOfWeek = [ 
    'Sunday', 
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

var weekDay = daysOfWeek[weekDayNumber];

currentDateString = weekDay + ', ';

currentDateString += currentDate.getDate();

var monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var monthNumber = currentDate.getMonth();

var month = monthsOfYear[monthNumber];

currentDateString += ' ' + month;

currentDateString += ' ' + currentDate.getFullYear();

document.getElementById('currentDate').innerHTML = currentDateString;

// Create Five day Forcast
let currentDay = weekDayNumber;

for (let i=1; i<6; i++) {
    //add one day to current day
    currendDay++

    // if current day is greater than 6 (Saturday), reset it to 0 for Sunday. 
    if (currentDay>6) {
        currentDate=0;
    }

    // assign value to placeholder in HTML
    const element = document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay]
}

//show/hide pancake
if (weekDayNumber === 5) {
    document.getElementById("pancake").removeAttribute("class", "hidden");
}