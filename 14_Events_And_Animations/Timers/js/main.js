// Timers in JavaScript
// window.setTimeout - Sets a delay
// window.setInterval - Sets an interval

// DELAYING FUNCTIONS
// window.setTimeout( CALLBACK_FUNCTION, TIME IN_MILLISECONDS );

function delayedFunction() {
  console.log("I was called after a second");
}

// delayedFunction(); // Callsite
window.setTimeout(delayedFunction, 1000);

function secondAnimation() {
  console.log("Start the second animation");
}

// Wait 3 seconds before calling secondAnimation
window.setTimeout(secondAnimation, 3000);

window.setTimeout(function() {
  console.log("Start the third animation");
}, 5000);

// CALLING A FUNCTION REGULARLY
// window.setInterval( CALLBACK, TIME_IN_MS );

function spawnEnemy() {
  console.log("Create an enemy");
}

window.setInterval(spawnEnemy, 2000);

window.setInterval(function() {
  console.log("Scroll another 100px");
}, 5000);
