console.log("hello world");

//timers

//types of timers
//timeout --> after the time runs out, an action happens
//interval --> an action happens after a specific amount of time periodically (unless you stop it)

//to decide what type of timer you need, ask the question: how many times do I want to execute the action?

//examples

//timeout
// setTimeout(function (){
//action I want to execute when the timer finishes
// }, delay in milliseconds)

//TODO: I want to log a message in the console after 5 seconds
setTimeout(function () {
  //   console.log("This message appeared after 5 seconds");
}, 5000);

//interval
// setInterval(function(){
//action to happen periodically
// }, delay in milliseconds)

//TODO: I want to remind myself to drink water every 3 seconds
setInterval(function () {
  //   console.log("Please, drink water!");
}, 3000);

//TODO: I want to remind myself to pay my rent every 2 seconds for a total of 10 seconds

const rentReminder = setInterval(function () {
  console.log("Pay your rent!");
}, 2000);

setTimeout(function () {
  //clearInterval stops the interval
  clearInterval(rentReminder);
}, 10000);

//N.B. timers are async!
//N.B control + c to stop your terminal execution
