function setup() {
  var browserHeight = window.innerHeight;
  var browserWidth = window.innerWidth;
  createCanvas(browserWidth, browserHeight);
  background(0, 0, 0);
  rectMode(CENTER);
}

function draw() {
  var num = random(140);
  // IF the mouse is pressed, the circle should be red, otherwise it should be white
  if (mouseIsPressed === true) {
    fill(random(255), random(255), random(255));
  } else {
    fill(255, 255, 255);
  }

  var randomNum = random(100);
  // If the randomNum is over 50, draw a square, otherwise draw an ellipse
  if (randomNum > 50) {
    rect(mouseX, mouseY, num, num);
  } else {
    ellipse(mouseX, mouseY, num, num);
  }
}
