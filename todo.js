
//Click the button to get every element in the array that has a value of 18 or more(filter)
var ages = [32, 33, 16, 40];

function call(age) {
  return age >= 18;
}

function myFunction1() {
  document.getElementById("demo").innerHTML = ages.filter(call);
}
//The push() method returns the new array length
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

function myFunction2() {
  document.getElementById("demo2").innerHTML = fruits.push("Kiwi");
  document.getElementById("demo1").innerHTML = fruits;
}

//Click the button to return an array.(valueof)
function myFunction6() {
  var fruits = ["Banana", "Orange"];
  document.getElementById("demo3").innerHTML = fruits.valueOf();
}
//Click the button to check get the value of the first element in the array that has a value of 18 or more.(find)
var value = [3, 10,20];

function check(value) {
  return value >= 18;
}

function myFunction3() {
  document.getElementById("demo5").innerHTML = value.find(check);
}

//Click the button to get the square root of each element in the array.(map)
var numbers = [4, 9, 16, 25];

function myFunction4() {
  x = document.getElementById("demo6")
  x.innerHTML = numbers.map(Math.sqrt);
}

//Click the button to remove the first element of the array(shift)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo7").innerHTML = fruits;

function myFunction5() {
  fruits.shift();
  document.getElementById("demo7").innerHTML = fruits;
}