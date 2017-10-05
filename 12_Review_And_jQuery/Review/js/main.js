// Comparison Operators
// == - Type Coercion
// === - Doesn't coerce types

console.log(42 == "42"); // Disparate types
console.log(42 === "42");

var age = 16;
var youthfulHacker = true;

if (age > 18 || youthfulHacker) {
  console.log("You can see the site");
} else {
  console.log("Too bad, buddy ol' pal");
}

function sayHello(name) {
  console.log("Hi there", name);
}
sayHello("Hen"); // Call-site - Run the function

for (var i = 1; i <= 5; i += 1) {}
console.log(i);

var books = ["Godel, Escher and Bach", "1984", "DORIAN", "50 Shades of Blue"];
var firstBook = books[0];
var lastBook = books[books.length - 1];
console.log(lastBook);

// Iteration - I can loop through a piece of data
for (var i = 0; i < books.length; i += 1) {
  var currentBook = books[i];
  console.log(currentBook);
}
