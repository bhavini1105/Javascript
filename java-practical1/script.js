// 1.  Odd Numbers

// let number = 15;

// while(number > 1){

//     if(number%2 === 1){
//         console.log(number);
       
//     }
//     number--;
// }
// console.log(number);

// 2.  Sum of First and last number

// let number = prompt(`Enter Number:`);
// let firstNumber,sum;
// let lastNumber = number%10;

// while(number>=10){
//     number = (number - (number%10))/10;
//     firstNumber = number;
// }
// console.log(`First number is ${firstNumber} & Last number is ${lastNumber}`);
// sum = firstNumber + lastNumber;
// console.log(sum);

// 4. palindrom number 

// let number = 1221;
// let temp = number;
// let reverse = 0 ;

// while(number !=0){
//     reverse = (reverse * 10) + (number%10);
//     number = parseInt(number / 10);
// }

// if(temp === reverse){
//     console.log( "Given number is Palindrom");
// }else{
//     console.log("Given number is not Palindrom");
// }

// 4. Febonaci Series

// let n = 15,sum;

// let a = 0;
// let b = 1;


// let count = 0;

// while (count < n) {
//      sum = a + b;
//      console.log(sum); 
     
//      a = b;
//      b = sum;
     
//      count++;
// }

// 5.  Count Digits in Number

let num=prompt("Engter a number: ");
let number=parseInt(num);
let originalNumber=number;
let count =0;
while(number!== 0){
  number=(number-number%10)/10;
  count++;
} 
console.log(count);
alert("Number of digit:"+count)
// console.log("Number of digit:"+count)