// EVENT HANDLERS IN JAVASCRIPT
// Target Element
// Event Type
// Callback Function

// CLICK EVENT
// $( ELEM ).on( EVENT_TYPE, CALLBACK );

var $button = $("#btn"); // Target Element

var eventType = "click"; // Event Type

function handleButtonClick(e) {
  console.log("The button was clicked", e);
} // Callback Function

// Event Handler - Binding
$button.on(eventType, handleButtonClick);

// Whenever the mouse goes over the h1 on the page, log out "You moved over the heading"

function headingMouse() {
  console.log("You moved over the heading");
}

$("h1").on("mouseover", headingMouse);

// When a p tag is dblclick ed on the page, log out "You double clicked a paragraph"
function onDoubleClick() {
  console.log("You double clicked a paragraph");
}

$("p").on("dblclick", onDoubleClick);

// Event Handler
// When the h3 is clicked, log something out

$("h3").on("click", function() {
  console.log("The h3 was clicked!");
});

function onResize() {
  var width = $(window).width(); // get browser width
  console.log("Width:", width);
}

$(window).on("resize", onResize);

// Select the input tag
// Whenever the input event is fired
// Call a function that says the user typed something
function userTyped(event) {
  var keyPressed = event.key;
  var message = "The user pressed " + keyPressed;
  console.log(message);
}

$("input").on("keypress", userTyped);

function onImageClick(event) {
  $(event.currentTarget).css({
    width: "500px"
  });
}

$("img").on("click", onImageClick);

function penTool(event) {
  var xCoord = event.screenX;
  var yCoord = event.screenY;
  // console.log(xCoord, yCoord);
}

$(window).on("mousemove", penTool);

function toggleMenu() {
  $("nav").toggleClass("open");
}

$("#menu").on("click", toggleMenu);

$("img").animate(
  {
    width: "600px"
  },
  1000
);
