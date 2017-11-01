var lastMouseX;
var lastMouseY;
var delta = 10;
var r = 0;
var g = 0;
var b = 0;

function onRedChange() {
  r = $("input.r").val();
  console.log(r);
}

$("input.r").on("input", onRedChange);

function onGreenChange() {
  g = $("input.g").val();
}

$("input.g").on("input", onGreenChange);

function onBlueChange() {
  b = $("input.b").val();
}

$("input.b").on("input", onBlueChange);

function setup() {
  var browserHeight = window.innerHeight;
  var browserWidth = window.innerWidth;
  createCanvas(browserWidth, browserHeight);
  rectMode(CENTER);
}

function draw() {
  stroke(r, g, b);
  strokeWeight(10);
  line(lastMouseX, lastMouseY, mouseX, mouseY);
  lastMouseX = mouseX;
  lastMouseY = mouseY;
  // ourRed += delta;
  // if (ourRed > 255) {
  //   delta = -10;
  // } else if (ourRed < 0) {
  //   delta = 10;
  // }
}
