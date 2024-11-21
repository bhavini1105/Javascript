/*
 
Array

const friend1 = 'name1';
const friend2 = 'name2';
const friend3 = 'name3';

let friends = ['name1' , 'name2' , 'name3'];

let y = new Array(214 , 2560 , 2016 , 2019);
console.log(y);

console.log(friends[1]);

console.log(friends.length);

console.log(friends [ friends.length - 1]);[something that produces a value]

friends[1]= 'name3'; // with use of this we can change the value also

// variables declrared with const can not be change but in array we can change /replace one value but not the whole array
// because only primitive values are im-mutable and array is not a primitive value   

// we can also put array in another array

let firstName = 'mimmi';
let detail = [firstName , 'lastName' ,  2024 - 1997 , friends];
console.log(detail);


const calAge = function (birthYear) {
        return 2037 - birthYear ;
    }
    
const year = [1970, 1996 , 2002 , 2014 ,2019];

// console.log(calAge(year)); // number - array  => NaN

const ageCalc1 = calAge(year[1]);
const ageCalc2 = calAge(year[0]);
const ageCalc3 = calAge(year[year.length - 1]);

console.log(ageCalc1 ,ageCalc2);

const array1 = [ calAge(year[1]) ,  calAge(year[0]) ,  calAge(year[year.length - 1])];
console.log(array1);

// methos in Array

*/

// const friends = ['jay' , 'mahi','esha']

// // push - add elements at end of the array 
// // push work as a function we can pass argument also and it is roohi
// // push function does return the value and it is the lenth of the new array
// const newLength = friends.push('roohi');
// console.log(friends);
// console.log(newLength);

// // unshift - add the at the begining of the array
// // unshift function also returns the length of the new array
// friends.unshift('john');
// console.log(friends);

// //pop - to remove element from the array from last
// // pop - functions returns the removed value from the array
// friends.pop(); // last
// const popped =friends.pop(); 
// console.log(popped);
// console.log(friends);

// // shift - remove element from the starting
// friends.shift();
// console.log(friends);

// //indexOf - in which possition certern element is in the array
// // it returns -1 if the element is not in the array
// console.log(friends.indexOf('mahi'));

// // include - es6 method - instead of giving index it returns boolean value(t/f)
// // if element is present returns true else false
// // it also checks the strict equality
// friends.push(23);
// console.log(friends.includes('mahi'));
// console.log(friends.includes('rahi'));
// console.log(friends.includes('23')); // false

// if(friends.includes('ishani')){
//     console.log('You have a friend name with ishani');
// }

// console.log(0.1+0.2);


// const calcTip = function (bill){
//  return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// }

// const bills1 = [125 ,55 , 40];
// const tips1 = [calcTip(calcTip[0]),calcTip(calcTip[1]),calcTip(calcTip[2])]
// console.log(bills1,tips1);
// const totals1 = [bills1[0] + tips1[0], bills1[1] + tips1[1]]

// const bills = [125 , 555 , 44 ,22 , 295 , 176, 44 ,10 , 107 , 52];
// const tips=[] ;
// const total = [];

// calcTip(bills);
// for(let i = 0 ; i < bills.length ; i++){
//      const tip = calcTip(bills[i]);
//      tips.push(tip);
//      total.push(bills[i] + tip);
// }

// console.log(tips);
// console.log(total);




// console.log();

// const array1 = [1,2,3,4,5];
// const str = array1.map(num => num.toString());
// console.log(str);

// function uprstr(str){
//     let upr1 = str[0].toUpperCase();
//     for( let i = 1 ; i < str.length ; i++){
//         upr1 = upr1 + str[i].toLowerCase();
//     }
//     return upr1;
// }

// const str = ['esha','roohi','ishani','pihu'];
// const upr = str.map(uprstr);
// console.log(upr);


// let number = [10,20,30,40,50];
// let double = number.map(a => a*2);
// console.log(double);

// function a(arr){

//     return `<h1> ${arr.name} </h1> <h3> ${arr.age} </h3>`
// }

// let arr1 = [
//     {
//         name : 'name1',
//         age : 1
//     },
//     {
//         name : 'name2',
//         age : 2
//     },
//     {
//         name : 'name3',
//         age : 3
//     }
// ]

// console.log(arr1.map(a));

// let array1=[3,6,2,8];
// let n = array1.filter(b => b >= 5 );
// console.log(n);

// let arr = [1,2,3,4,5];
// let arr1 = arr.filter(b => b % 2 == 0);
// console.log(arr1);

// let array = ['pihu','bhavini','bhargav','shubham'];
// let len = array.filter(b => b.length >= 5);
// console.log(len);

// function peopleWhoBelongToTheIlluminati(arr){
//     // your code here
//   }
//   // test
// peopleWhoBelongToTheIlluminati= [
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ];

//  p = peopleWhoBelongToTheIlluminati.filter(b => b.member === true);
//  console.log(p);
 
//  ofAge=[
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ];

// let m = ofAge.filter(b => b.age >= 18);
// console.log(m);


  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

/* 
map: direct 
*/

// function m(a) {
//     return a*2;
// }
// function n(a) {
//     return a%2;
// }


// let num = [1,2,3,4,5,6];
// console.log(num.length);
// a=num.length;
// a/=2;
// console.log(num[a]); 


// let doub = num.map(m);
// let doub1 = num.filter(n);
// console.log(doub);
// console.log(doub1);


// let num1 = [10,20,30,40,50,60];
// num1.forEach(c => console.log(m(c)));

/*  give the value of index of array if element is not in the arrya returns -1  */

// let fruits = ['banana', 'apple','orange','mango','kiwi'];
// console.log(fruits.indexOf('apple'));

// function even(num) {
//     return (num % 2 == 0);
// }

/* gives the booleans true and false /  suppose all elements is divisible by given number then gives rue but if any of number is not divisible by 
then returns false */

// let numbers = [10,20,31,40,50,60];
// console.log(numbers.every(num => num % 2 == 0)); // output = false

/* */

// let num = [10,20,30,40,50,60];
// console.log(num.some(num1 => num1 % 2 == 0));

/* returns boolean values - if element is present => returns true , not peresent => returns false */

// let fruit = ['apple','banana','mango','kiwi'];
// console.log(fruit.includes('chikoo'));

// let fruits = ['banana', 'apple', 'orange', 'mango', 'kiwi'];


