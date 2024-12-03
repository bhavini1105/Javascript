/*
SetTimeout Function
The time (in milliseconds) to wait before executing the function.
*/

// setTimeout(() => {
//     console.log("hello...");
// }, 2000)

// function greet() {
//     console.log("Welcome to JavaScript!");
// }

// setTimeout(greet, 3000); // Calls greet after 3 seconds

// const timerId = setTimeout(() => {
//     console.log("This will not run.");
// }, 5000);

// clearTimeout(timerId); // Cancels the timeout

/* 
SetInterval

setInterval is used for repeated execution, while setTimeout is for a one-time delay.

setInterval(function, interval);
function: The code or function to execute repeatedly.
interval: The time (in milliseconds) between each execution.

clearInterval(intervalID);
intervalID: The ID returned by setInterval, which is used to cancel the interval.

*/

let count = 1;
let interval = setInterval(()=>{
    console.log("HELLO....",count);
    count++;
    if(count == 10){
        count = 1;
        console.log("WELCOME......");
        clearInterval(interval);
    }
},2000)