/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?
//  "Partnah"

/* CHALLENGE 2 */

function delayedGreet() {
  console.log("welcome")
}
// Uncomment the following line to check your work!
setTimeout(delayedGreet, 3000) // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log("hello")
}
setTimeout(helloGoodbye, 3000, console.log("good bye"))
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */
//  Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.
function brokenRecord() {
  console.log("Hi")
}

setInterval(brokenRecord, 1000);
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */
// //  Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.
// let counter = 0;
// function limitedRepeat() {
//     counter++;
//     console.log(counter)
//     if (counter >= 5) {
//         clearInterval(result)
//     }
// }
// let result = setInterval(limitedRepeat, 1000);
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */
// Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration. everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds. Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time. What do you expect to happen?
function everyXsecsForYsecs() {
  // ADD CODE HERE
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
