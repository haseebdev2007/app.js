// Chapter 31 - 34 (Date & Time)

var dObj = new Date();


var dStr = new Date().toString();


var day = d.getDay();


var d = new Date();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert("Today is: " + dayNames[d.getDay()]);


var fullDate = new Date();
var year = fullDate.getFullYear();
var month = fullDate.getMonth();
var date = fullDate.getDate();
var day = fullDate.getDay();
var hours = fullDate.getHours();
var minutes = fullDate.getMinutes();
var seconds = fullDate.getSeconds();
var milliseconds = fullDate.getMilliseconds();


var later = new Date(2020, 11, 31);


var date1992 = new Date(1992, 1, 2);



alert(new Date("Jan 1, 1980").getTime());

var d = new Date();
d.setFullYear(2025);


function setMonthToJanuary(date) {
    date.setMonth(0);
    return date;
}


var d = new Date();
d.setDate(15);


function setMinutesByPrompt(date) {
    var mins = parseInt(prompt("Enter minutes:"), 10);
    date.setMinutes(mins);
    return date;
}


function addHours(date, hours) {
    date.setHours(date.getHours() + hours);
    return date;
}


function calculateAge(birthDateStr) {
    var birthDate = new Date(birthDateStr);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();

    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

var dob = prompt("Enter your date of birth (YYYY-MM-DD):");
alert("Your age is: " + calculateAge(dob));



// Chapter 35 - 37 (Functions)


function displayAlert() {
}

function askName() {
    var userName = prompt("Enter name");
}


function callFunctions() {
    func1();
    func2();
}


function showName() {
    var name = prompt("Enter name");
    alert("Your name is: " + name);
}
showName();


function concat(a, b, c) {
}
concat(myVar, "hello", 5);


function joinStrings(str1, str2) {
    var result = str1 + str2;
}


function multiply(a, b, c) {
    var result = a * b * c;
}


function average(numbers) {
    var sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}


function sum(a, b) {
    return a + b;
}


function averageArray(arr) {
    var total = arr.reduce((acc, num) => acc + num, 0);
    return total / arr.length;
}


function giveNumber() {
    return 10;
}
var value = giveNumber();


function letterCount(word) {
    return word.length;
}


function setYear(date, year) {
    date.setFullYear(year);
    return date;
}


function getAge(dateOfBirth) {
    var dob = new Date(dateOfBirth);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    if (
        today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
        age--;
    }
    return age;
}


function isPresent(word) {
    var arr = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
    return arr.includes(word);
}


function repeatLetter(letter) {
    return letter.repeat(10);
}


function reverseArray(arr) {
    return arr.reverse();
}


function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}


function isPalindrome(str) {
    var clean = str.toLowerCase().replace(/[\W_]/g, '');
    return clean === clean.split('').reverse().join('');
}


function toTitleCase(str) {
    return str.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}


function findMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}


// Chapter 38 (Local vs. Global Variables)


function showLocalVariable() {
    var localVar = "I am a local variable";
    console.log(localVar);
}

showLocalVariable();

var globalVar = "I am global";

function accessGlobal() {
    console.log(globalVar);
}

accessGlobal();


// Chapter 39, 40 (Switch Statements)


var grade = 'B';

switch (grade) {
    case 'A':
        console.log("Excellent!");
        break;
    case 'B':
        console.log("Good Job!");
        break;
    case 'C':
        console.log("You passed.");
        break;
    case 'D':
        console.log("Try harder next time.");
        break;
    default:
        console.log("Invalid grade.");
}




var cityName = prompt("Enter your city name:");

switch (cityName.toLowerCase()) {
    case 'karachi':
        alert("Welcome to the City of Lights!");
        break;
    case 'lahore':
        alert("Welcome to the Heart of Pakistan!");
        break;
    case 'islamabad':
        alert("Welcome to the Capital!");
        break;
    default:
        alert("City not recognized.");
}


