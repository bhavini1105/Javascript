
// first program

// var a,b,c;

// a=10;
// b=20;

// console.log("Value of A",a,"Value of B",b);

// c=b;
// b=a;
// a=c;

// console.log("After Swepping VAlues");
// console.log("Value of A", a,"Value of B",b);

// second program

// let x=2;
// console.log(x);

// let result=x**2;

// console.log("Squre of Number",result);

// third program

// let total=180;
// let anglea=90;
// let angleb=30;

// c = anglea + angleb;

// console.log(c);

// let anglec= 180 - c;

// console.log("Thrid Angle of triangle",anglec);


// document.getElementById("demo").innerHTML=10*5;

// Program 1 

// let userAge= prompt(`Enter Your Age`);

// if(userAge>18){
//     console.log("Welcome, You Are Eligible For Vote");
// }
// else{
//     console.log("Sorry You Are Not Eligible");
// }

// Program 2

// let temprature=prompt(`Enter Current Temprature :`);

// if(temprature > 30){
//     console.log("It's to Hot")
// }
// else{
//     if(temprature>20 && temprature<30){
//         console.log("It,s Pleasant")
//     }
//     else{
//         console.log("It's cold Outside")
//     }
// }

// PROGRAM 3

// let score =  prompt(`Enter your Score`);

// if(score >= 90){
//     console.log("Grade A")

// }

// else{
//     if(score>80 && score<90){
//         console.log("Grade B")
//     }
//     else{
//         if(score>70 && score<80){
//             console.log("Grade C")
//         }
//         else{
//             if(score>60 && score<70){
//                 console.log("Grade D")
//             }
//             else{
//                 if(score<60){
//                     console.log("Grade F")
//                 }
//             }
//         }
//     }
// }


// program 3

// let age=prompt(`Enter Your Age`);

// if(age<= 12){
//     console.log("Child Ticket: $10");
// }
// else{
//     if(age<13 && age>64){
//         console.log("Adult Ticket : $20")
//     }
//     else{
//         if(age>65){
//         console.log("Senior Ticket : $15");
//         }
//     }
// }

// progrme 4

// let num=prompt(`Enter The Number to Know Day`);

// if(num=1){
//     console.log("Monday")
// }
// else{
//     if(num=2){
//         console.log("Tuesday")
//     }
//     else{
//         if(num=3){
//             console.log("Wednesday")
//         }
//         else{
//             if(num=4){
//                 console.log("Thusday");
//             }
//             else{
//                 if(num = 5){
//                     console.log("Friday");
//                 }
//                 else{
//                     if(num=6){
//                         console.log("Saturday");
//                     }
//                     else{
//                         if(num=7){
//                             console.log("Sunday");
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(125>="22"<3);

// flase value
// 1. 0
// 2. NAN
// 3. ""
// 4.null
// 5. undefined
// 6.false

// or operators returns the 1st truthy value only when there is not any comparision (in this case it returns value)
// If there is any comparision it will returns boolean value

// console.log(Boolean({}));

// console.log(5 && "hi" || {} || 0 && undefined);

// let a={};
// console.log(Boolean(a));

// let x ="0";
// console.log("Number :" +Number(x));
// console.log("String :" +String(x));
// console.log("Boolean :" +Boolean(x));

// console.log(1 && "hi" && {});

// console.log(Boolean([]));

// let a= BigInt("567") + BigInt("3");
// console.log(a);


// let password = prompt(` Enter  Your PassswOrd`);
// let newPassword = prompt(`Enter New Password`);

// if(password === newPassword){
//     console.log("Login Succeesfully");
// }
// else{
//     prompt(`Enter New Password `);
// }

// let electricityUnit = prompt(`enter your Bill Unit `)

// if(electricityUnit <= 50){
//     let total = electricityUnit * 0.50 * 0.2;
//     console.log(total)
// }
// else{
//     console.log("hello");
// }

// let i = 5;

// for(i=0 ; i <= 5 ; i++){
//     console.log(i);
// }

// 435 - 50 = 385 // (50*0.50)=25
// 385 - 100 = 285 // (100*0.75)=75  
//25+75=100
// 285-100 = 185  // 100*1.20 = 120
// 100+120 = 220

// 185*1.50 = 277.5  //220 + 277.5 = 477.5

// 477.5*0.2 =99.5 

// total biil =99.5 + 477.5 = 597.00

// let units = prompt(`Enter Your bill Units :`);
// let bill = 0 ;

// if(units <= 50){
//     bill = 0.50 * units ;
// }else if(units <= 100){
//     bill = 25 + ((units-50) * 0.75);
// }else if(units <= 250){
//     bill = 75 + ((units-150) * 1.50); 
// }else{
//     bill = 220 + (units-250) * 1.50
// }

// let bills = bill * 0.20;
// let totalBill = bills + bill ;

// console.log(totalBill);

// let n = prompt(`Enter Number :`);

// for(i=n ; i >= 0 ; i--){
//     console.log(n);
// }

// for(let i = 1 ; i <= 5 ; i++){
//     let pattern = '' ;
//     for(let j = 1 ; j <= 5 ; j++){
//         if(j <= i){
//             pattern += '*';
//         }else{
//             pattern += '';
//         }
//     }
//     console.log(pattern);
// }


// for(let i = 1 ; i <= 5 ; i++){
//          let pattern = '' ;
//          for(let j = 5 ; j >= 1 ; j--){
//              if(j <= i){
//                  pattern += '*';
//              }else{
//                  pattern += ' ';
//             }
//         }
//          console.log(pattern);
// }

// for(let i = 1 ; i <= 5 ; i++){
//     let pattern = '' ;
//     for(let j = 5 ; j >= 1 ; j--){
//         if(j >= i){
//             pattern += '*';
//         }else{
//             pattern += ' ';
//         }
//     }
//     console.log(pattern);
// }

// for(let i = 1 ; i <= 5 ; i++){
//     let pattern = '' ;
//     for(let j = 5 ; j >= 1 ; j--){
//         if(j >= i){
//             pattern += '*';
//         }else{
//             pattern += ' ';
//         }
//     }
//     console.log(pattern);
// }


// for(let i = 1 ; i <= 5 ; i++){
//     let pattern = '' ;
//     for(let j = 1 ; j <= 5 ; j++){
//         if(j >= i){
//             pattern += '*';
//         }else{
//             pattern += ' ';
//         }
//     }
//     console.log(pattern);
// }

// let number=1;
// while(number<=20){

//     if(number%2===0){
//         console.log(number);

//     }
//    number++;
// }


/*Factorial*/

// let n = 6, factorial = 1;
// while (n >= 1) {
//     factorial *= n;
//     n--;
// }
// console.log(factorial);

// let n = 5;
// let factorial = 1;

// for( let i = n ; i >= 1 ; i-- ){
//     let factorial = n * i;
// }
// console.log(factorial);


// let n = 3;
// let factorial = 1;

// do {
//     factorial *= n;
//     n--;
// } while (n >= 1)

// console.log(factorial);

// let number = 15;

// while(number > 0){

//     if(number%2 === 0){
//         console.log(number);
       
//     }
//     number--;
// }
// console.log(number);

// let number = 15;

// while(number > 0){

//     if(number%2 === 1){
//         console.log(number);
       
//     }
//     number--;
// }
// console.log(number);

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

// let number = 15;
// let n1 = 0 , n2 = 1;
// let sum = 0 ;
// let febonaci = "0"

// while (number >= 0) {

//     febonaci += n1;
    
//     sum = n1 + n2;
//     n1 = n2 ;
//     n2 = sum ;

// }
// console.log(febonaci);

// console.log("hello");

// palindrom number 

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

// Fibonaci Number 

// let num ;
// let x = 0;
// let y = 1;

// let sum = x + y;
// console.log(x);

// while (num <15) {

//     console.log(sum);

//     sum = x + y ;
//     x = y ;
//     y = sum;
// }