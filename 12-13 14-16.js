// chapter 12-13
// no1
let char = prompt("Enter a single character:");

// Step 2: Get ASCII code of the character
let ascii = char.charCodeAt(0);

// Step 3: Check type of character using ASCII values
if (ascii >= 48 && ascii <= 57) {
    console.log("The input is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    console.log("The input is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log("The input is a lowercase letter.");
} else {
    console.log("The input is neither a number nor a letter.");
}

// no2
var number1 = parseInt(prompt('enter the first integer:'));
var number2 = parseInt(prompt('enter the second integer:'));
var result;

if(number1 > number2){
    alert(number1 + " is larger")
} else if(number2 > number1){
    alert(number2  + " is larger")
} else{
    alert("both integer are equal")
}

// no3

let num = prompt("enter the number");

if(num > 0){
    alert("the number is positive")
} else if(num < 0){
    alert("the number is negative")
}else{
    alert('the number is zero')
}

// no4
var character = prompt("enter the character")

if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
  alert("TRUE")
}else if(
    character === 'b' || character === 'c' || character === 'd' || character === 'f' || character === 'g' ||
    character === 'h' || character === 'j' || character === 'k' || character === 'l' || character === 'm' ||
    character === 'n' || character === 'p' || character === 'q' || character === 'r' || character === 's' ||
    character === 't' || character === 'v' || character === 'w' || character === 'x' || character === 'y' ||
    character === 'z'){
    alert("FALSE")
} else {
    alert("Please enter a valid single alphabet character (a-z or A-Z).");
}


// no5
var  userPassword = prompt("enter the userPassword")
var  confirmPassword = prompt("enter the confirmPassword")
    
if(userPassword === "" || userPassword === null ){
    alert("enter the userPassword")
} else if (userPassword === confirmPassword){
    alert("Correct! The password you entered matches the original password.")
}else{
    alert("Incorrect password")
}

// no6
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day"; 
} else { 
    greeting = "Good evening";  
}

 //chapter no 14-16

 //no1

 // Declare an empty array 
let studentNames = [];

//no2
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);

//no3
let numbers = [1, 2, 3, 4, 5];

//no4
let flow = [true, false, true, false];

//no5
let mixedArray = [42, "hello", true, null, { key: "value" }, [1, 2, 3]];



