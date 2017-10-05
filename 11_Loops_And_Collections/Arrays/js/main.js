// Arrays
// Ordered lists of any data
// Iterable (able to be looped through)
// Index-based (starting at 0)

var emptyArr = [];
var colors = ["red", "yellow", "rebeccapurple", "gainsboro"];

// Accessing Information
// Use indices (index)
// Zero-based
// Wrap the index in square brackets
console.log(colors[0]);
console.log(colors[2]);
var colorLength = colors.length;
console.log(colors[colorLength - 1]);

// Reassigning Elements
// Access an element in the same way as before
// Followed by an = and a value

console.log(colors);
colors[1] = "BLUE (UPDATED)";
console.log(colors);

// Looping through arrays

var ordinals = [
  "zeroth",
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh"
];

for (var i = 0; i < ordinals.length; i += 1) {
  console.log(ordinals[i]);
}

// console.log(ordinals[0]);
// console.log(ordinals[1]);
// console.log(ordinals[2]);
// console.log(ordinals[3]);
// console.log(ordinals[4]);
// console.log(ordinals[5]);
// CMND + SHIFT + D - duplicates a line!

// Print out each color in colors
// Don't hardcode the ending condition

for (var index = 0; index < colors.length; index += 1) {
  var color = colors[index];
  console.log(color);
}
