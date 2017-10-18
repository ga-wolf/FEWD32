// DEFINE count, set it to 0
var count = 0;

// Target: .clickCounter button
var $button = $(".clickCounter button");
// Event Type: "click"
var eventType = "click";
// Callback
function onButtonClick() {
  count += 1;
  $(".clickCounter p span").html(count);
}

$button.on(eventType, onButtonClick);
// WHEN the user clicks the button in clickCounter
// INCREMENT a variable called count
// UPDATE the HTML of .clickCounter span to reflect that variable

// WHEN the mouse moves in the entire browser window, CALL a function that:
// ACCESS the current X coordinates of the mouse
// SET the html of .x to reflect that
// ACCESS the current Y coordinates of the mouse
// SET the html of .y to reflect that

function printXAndY(event) {
  var xCoord = event.clientX;
  $(".x").html(xCoord);
  $(".y").html(event.clientY);
}

$(window).on("mousemove", printXAndY);
// Any time a mouse moves in the entire browser window, call the printXAndY function

// WHEN I click .bill
// STORE the currentWidth of .bill
// Multiply it by 2, and SAVE it as desiredWidth
// UPDATE .bill's width to be desiredWidth

function makeImageBigger() {
  var currentWidth = $(".bill").width();
  var desiredWidth = currentWidth * 2;
  $(".bill").animate(
    {
      width: desiredWidth
    },
    500
  );
}

$(".bill").on("click", makeImageBigger);
// document.querySelector(".bill").addEventListener("click", makeImageBigger);
