function getinput(num) {
  var result = document.getElementById("result");

  result.value += num;
}

function clearResult() {
  var result = document.getElementById("result");

  result.value = "";
}
function getResult() {
  {
    var result = document.getElementById("result");
    result.value = eval(result.value);
  }
}
function getSquare() {
  {
    var result = document.getElementById("result");
    result.value = result.value*result.value;
  }
}
function toDelete() {
  {
    var result = document.getElementById("result");
    var newResult = result.value.slice(0,-1);
    result.value = newResult;
  }
}