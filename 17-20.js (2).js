// Loop 1 
for (var i = 0; i < 10; i++) {
    console.log("Number: " + i);
  }
  
  // Loop 2 
  for (var i = 0; i <= 11; i++) {
    console.log("Counting: " + i);
  }
  
  // Loop 3 
  for (var i = 0; i <= 4; i++) {
    console.log("Small count: " + i);
  }
  
  // Loop 4 
  for (var count = 0; count < 100; count += 10) {
    console.log("Count by 10s: " + count);
  }
  
  // Loop 5 
  for (var i = 2; i > -1; i--) {
    console.log("Countdown: " + i);
  }
  
  
  

  
  var array = ["apple", "banana", "cherry"];
  var numElements = array.length;
  console.log("Number of fruits: " + numElements);
  
  
  


  var flag = true;
  if (flag) {
    console.log("Flag is true!");
  }
  
  
  


  var pets = ["cat", "dog", "rabbit"];
  for (var i = 0; i < pets.length; i++) {
    console.log("Pet: " + pets[i]);
  }
  
  
  


  for (var i = 0; i < 10; i++) {
    if (i === 1) {
      alert("Alert: " + i);
      break;
    }
  }
  

  


  var userNames = ["Qadir", "haseeb", "haris"];
  var firstName = prompt("Enter first name");
  for (var i = 0; i < userNames.length; i++) {
    if (firstName === userNames[i]) {
      alert("Enter");
      break; 
    }
    if (i === userNames.length - 1) {
      alert("Please write correct user name");
    }
  }
  
  


  var list = ["pen", "book", "bag"];
  var userInput = prompt("Enter item name");
  var matchFound = false;
  for (var i = 0; i < list.length; i++) {
    if (userInput === list[i]) {
      alert("Match found");
      matchFound = true;
      break;
    }
  }
  if (!matchFound) {
    alert("No match found");
  }
  


  
  var firstArr = ["a", "b", "c", "d", "e", "f"];
  var secondArr = [1, 2, 3, 4, 5, 6];
  
  for (var i = 0; i < firstArr.length; i++) {
    for (var j = 0; j < secondArr.length; j++) {
      console.log(firstArr[i] + secondArr[j]);
    }
  }
  