// IF STATEMENTS

// if ( CONDITION ) {
//   // Code to execute
// }

if (42 === 42) {
  console.log("42 is equal to 42");
}

if (41 !== 42) {
  console.log("41 is not equal to 42");
}

var name = "Bill Murray";

if (name === "Jack") {
  console.log("A teacher");
} else if (name === "Hen") {
  console.log("A great TA");
} else {
  console.log("A student");
}

// IF the name is "Jack"
//   Log out Apparently he is a teacher
// ELSE IF the name is "Hen"
//   Log out A great TA
// ELSE
//   Log out A student

// STORE the age of the user, as userAge
// If the user has an age of under 18
// Redirecting to mylittlepony.com
// Otherwise
// You can see the website
var userAge = 10;
if (userAge >= 18) {
  console.log("You can see the website");
} else {
  console.log("Redirecting to mylittlepony.com");
}

var password = "asfsafas";
var admin = true;

if (password === "CHICKEN" || admin === true) {
  console.log("You can edit this post");
} else {
  console.log("You can't edit this post");
}

// If the password is CHICKEN OR the person is an admin
// Log out you can edit this post
// Otherwise
// Log out you can't edit this post
