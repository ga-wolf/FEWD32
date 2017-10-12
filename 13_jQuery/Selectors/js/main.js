var $heading = $("h1");
console.log($heading);

console.log($("p"));

console.log($("li"));

var $bill = $(".bill");
console.log($bill);

var innerHTML = $("a").html();

var href = $("a").attr("href");

var fontSize = $("a").css("font-size");

// IMAGE WITH ID OF NICK
// Save each of these things in variables and log to the screen
// Access the current source value
var src = $("#nick").attr("src");
// Access the current ID
var id = $("#nick").attr("id");
// Access the current width
var width = $("#nick").css("width");

function changeHeading() {
  $("h1").html(Math.random());
}

$("a.yahoo").attr("href", "http://google.com");
$("a.yahoo").html("Google");
$("a.yahoo").css({
  color: "hotpink",
  fontSize: "50px",
  textDecoration: "none"
});

// I want to create a new H2
var $h2 = $("<h2></h2>");
// I want the text to be Made with love by JS
$h2.html("Made with love by JS");
// I want the font size to be 200px
$h2.css("font-size", "200px");
// I want the new element to be at the top of the page
$("body").prepend($h2);

function addBill() {
  console.log("aksnlkn");
  var $bill = $("<img>");
  $bill.attr("src", "http://fillmurray.com/50/50");
  $("body").prepend($bill);
}

$(window).on("scroll", addBill);

// addBill();
// window.setTimeout(addBill, 5000);
// window.setInterval(addBill, 5000);

// addBill function
// CREATE a new img tag, store as $bill
// CHANGE the src attribute to fillmurray
// PREPEND it to the top of the page
