//no1
let value1 = 20;
let value2 = 50;

if(value1 >= value2){
    alert("value1 is greater than value2")
} else if (value1 <= value2){
    alert("value1 is less than value2")
}

//no2
let marks = parseFloat(prompt("Enter your total marks: "));
let obtainedMarks = parseFloat(prompt("Enter the obtainedMarks: "));

let percentage = (marks / obtainedMarks) * 100;


console.log(`Your percentage is: ${percentage}%`);

if (percentage >= 90) {
    console.log("Grade: A");
} else if (percentage >= 75) {
    console.log("Grade: B");
} else if (percentage >= 50) {
    console.log("Grade: C");
} else if (percentage >= 35) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//no3

let a = 5;

if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}
//no4

let city = prompt("Please enter a city:");

if (city.toLowerCase() === "karachi") {
  alert("This is Karachi!");
} 

else if (city.toLowerCase() === "lahore") {
  alert("This is Lahore!");
} 

else {
  alert("This is neither Karachi nor Lahore.");
}


//chapter no 13

//no1
if (a === b && c === d){
    console.log("true");
    
}


