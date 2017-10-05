// var num = 0; // Start
//
// while (num < 5) {
//   // Condition
//   console.log(num);
//   num = num + 1; // Step || Increment
// }
//
// console.log("Loop Done");
//
// var i = 10;
//
// while (i > 0) {
//   console.log(i);
//   i = i - 1;
// }
//
// console.log("Blast off");
//
// for (var i = 0; i <= 5; i += 1) {
//   console.log(i);
// }
//
// // Use a for loop to count from 10 down to 1
// // After that, log out Blast off
//
// for (var count = 10; count >= 1; count -= 1) {
//   console.log("Count:", count);
// }
//
// console.log("Blast off!");
//
// for (var width = 100; width <= 300; width += 10) {
//   console.log("Width:", width);
// }
//
// SAVE currentNum, starting with the value 0
// LOOP while currentNum is less than or equal to 20
//   FOR each iteration, add 1 to currentNum
//     IF currentNum % 2 === 0
//       log currentNum is even
//     ELSE
//       log currentNum is odd

for (var currentNum = 0; currentNum <= 20; currentNum += 1) {
  if (currentNum % 2 === 0) {
    console.log(currentNum + " is even");
  } else {
    console.log(currentNum + " is odd");
  }
}

function gradeAssigner(score) {
  if (score > 90) {
    console.log(score, " you got an A");
  } else {
    console.log("Score", score);
  }
}

for (var currentScore = 60; currentScore <= 100; currentScore += 1) {
  gradeAssigner(currentScore);
}
