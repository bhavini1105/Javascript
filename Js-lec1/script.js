// let a= 10;
// console.log(a);

// // alert("Welcome To Pogramming");

// document.write('First Lec of Javascript');
// console.log(typeof(null));

// console.log(0.1+0.2===0.3);
// console.log(0.1 + 0.2);
// console.log(0.2 + 0.1);


// let myid = document.getElementById("myid");
// myid.innerHTML= "Done.....!"

// console.log(typeof(+true));

// Input values
// let principal = 1000; // Principal amount
// let rate = 5; // Annual interest rate
// let time = 2; // Time in years
// let interest;

// if (principal > 0 && rate > 0 && time > 0) {
//      interest = (principal * rate * time) / 100;
// }else{

//     "Invalid input! Principal, rate, and time must be greater than zero.";
// }

// console.log("Simple Interest: " , interest);

// // Input: Marks obtained by the student
// let marks = 95;  // You can change this value to test other cases

// // Determine grade based on marks using logical operators
// if (marks >= 90 && marks <= 100) {
//     console.log('Grade: A+');
// }
// else if(marks >= 80 && marks < 90){
//     console.log('Grade: A');
// }
// else if(marks >= 70 && marks < 80){
//     console.log('Grade: B');
// }
// else if(marks >= 60 && marks < 70){
//     console.log('Grade: c');
// }
// else if(marks >= 50 && marks < 60){
//     console.log('Grade: D');
// }
// else if(marks >= 0 && marks < 50){
//     console.log('Grade: F');
// }
// else{
//     console.log('Below Avareage/Fail.');
// }

// Input: Basic salary and working hours
let basicSalary = 3000; // Basic salary
let workingHours = 49;   // Number of hours worked
let totalSalary = 0;

// Calculate total salary using logical operators
// If hours <= 40, no overtime, basic salary only
if (workingHours <= 40) {
    console.log(basicSalary);
}
// Overtime pay for hours > 40
else if (workingHours > 40) {
    totalSalary = basicSalary + (workingHours - 40) * (basicSalary / 40 * 1.5) ;
    console.log(totalSalary);
}
// For invalid input values
else{
    console.log('Wrong Slary Enterde');
}

// console.log("Total Salary: $" + totalSalary);
