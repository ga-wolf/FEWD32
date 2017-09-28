function sayHello() {
  console.log("Hello");
}

sayHello(); // The callsite

function printFavouriteNumber() {
  console.log("42 is the best");
}

printFavouriteNumber();

function sayHi(name) {
  var greeting = "Hello " + name;
  console.log(greeting);
}

sayHi("Groucho");
sayHi("Harpo");
sayHi();

function multiply(x, y) {
  var result = x * y;
  console.log(result);
}

multiply(5, 4);
multiply(10, -2);

function add(x, y, z) {
  var result = x + y + z;
  console.log(result);
}

add(1, 2, 3);
add(1124214124, 124124122, 353351);

// CREATE an add function
//   RECEIVE three pieces of information
//   STORE the result of those three numbers being added together in a result variable
//   LOG that result

function squareNumber(x) {
  var result = x * x;
  return result;
}

squareNumber(4);

// displayFullname
// Receive two parameters: firstName, lastName
// Use concatenation to combine these two parameters
// Return the full name

function displayFullname(firstName, lastName) {
  var fullname = firstName + " " + lastName;
  return fullname;
}

var groucho = displayFullname("Groucho", "Marx");
console.log(groucho);
console.log(displayFullname("Harpo", "Marx"));

function antisocialHello() {
  return "No.";
  console.log("Hello");
}

antisocialHello();

// canView
// RECEIVE an age
// IF the age is under 18
// Log out "You can't view this"
// ELSE
// Log out "You're all good"

function canView(age) {
  if (age < 18) {
    console.log("You can't view this");
  } else {
    console.log("You're all good");
  }
}
