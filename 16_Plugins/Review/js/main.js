// Event Type: keypress
// Event Target: input.userInput
// Callback Function: ...

function userTyped(event) {
  var lastPressed = event.key;
  $(".last").html(lastPressed);
  var current = $("input").val();
  $(".current").html(current);
}

$("input.userInput").on("keyup", userTyped);

// If a user types a key into the input with the class of userInput
// Run a function that:
// Gets the last pressed key, and saves it as lastPressed
// Change the span.last's HTML to be lastPressed
// Get everything the user has typed in, and saves it as current
// Change span.current's HTML to be current
