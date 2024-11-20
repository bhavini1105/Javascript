// 'use strict' // gives the error msg , introdueces the reserved variables/word

// function logger(){
//     console.log('Hello');
// }

// logger(); //invoking fonction or running function or calling function
// logger(); 
// logger(); 

// Function Declaration

//                         //parameter / argument
// function foodProcessor(apples , oranges){
//     const juice = ` Juice with ${apples} Apples And ${oranges} Oranges `;
//     return juice;
// }

// const appleJuice = foodProcessor(5 , 0);
// console.log(appleJuice);

// const orangeJuice = foodProcessor(2 , 5);
// console.log(orangeJuice);

// console.log(foodProcessor(5 , 0));
// console.log(foodProcessor(5 , 1));

// function age1(birthYear){
//     return 2024 - birthYear;
// }

// const age = age1(1991);
// console.log(age)

// An Anonymous Functuion
// for this we have to create a variable and need to store the function in that

// Function Expression

           //Expression = produces a value
// const age2 = function (birthYear) {
//     return 2037- birthYear;
// }

// const agecalc2 =  age2(1992);
// console.log(age2);

// Arrow Function

// const calacage = birthYear => 2037-birthYear;

// const age3 =calacage(1997);
// console.log(age3);

// const ageUntilRetriment = birthYear => {
//     const currentAge = 2025 - birthYear;
//     const retrirementage = 65 - currentAge;
//     return retrirementage;
// }
// console.log(ageUntilRetriment);

// const ageUntilRetriment1 = (birthYear, firstName) => {
//     const currentAge = 2025 - birthYear;
//     const retrirementage = 65 - currentAge;
//     // return retrirementage;
//     return `${firstName}  retires in ${retrirementage}`
// }
// console.log(ageUntilRetriment1 (1992,'Boby'));

// const cutPices = function (fruit) {
//     return fruit * 4;
// };

// const fruitProcessor = function (apples , oranges) {
//     const applePieces = cutPices(apples);
//     const orangePices = cutPices(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePices} pieces of oranges.`;
//     return juice;
// };

// console.log(fruitProcessor(2,3));

// const calAge = function (birthYear) {
//     return 2037 - birthYear ;
// }

// const ageUntilRetriment = function (birthYear , firstName) {
//     const age = calAge(birthYear);

//     const retrirementage = 65 - age ;

//     if(retrirementage > 0){
//         return retrirementage;
//     }else{
//         return -1;
//     }
// }
// console.log(ageUntilRetriment(1992 , 'nick'));
// console.log(ageUntilRetriment(1952 , 'virat'));

// const calcAverage = (a,b,c) =>(a + b + c) / 3;
// console.log(calcAverage(44 , 23 , 71));

// const scoreDolphin = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);

// console.log(scoreDolphin ,scoreKoalas);

// const checkWinner = function (avgDolphin , avgKoalas) {
    
//     if(avgDolphin >= 2*avgKoalas){
//         console.log(`Dolphin Team wins with ${avgDolphin} vs. ${avgKoalas}`);
//     }
//     else if( avgKoalas >= 2* avgDolphin){
//         console.log(`Koalas Team wins with ${avgKoalas} vs. ${avgDolphin}`)
//     }else{
//         console.log(`No Team  Wins`);
//     }
// }

// checkWinner(scoreDolphin , scoreKoalas);
// // checkWinner(576 , 111);


// const calcAverage1 = (a ,b ,c) => (a+b+c)/3
// calcAverage1( 1 , 2 , 3);

// const scoreDolphin1 = calcAverage1(120 , 56 , 57);
// const scoreKoalas1 = calcAverage1(20 , 526 , 157);

// const checkWinner1 = function ( avgDolphin1 , avgKoalas1 ){
//     if (avgDolphin1 >= 2*avgKoalas1) {
//         console.log(`Dolphin Wins`);
//     }else if (avgKoalas1 >= 2*avgDolphin1) {
//         console.log(`Koalas Wins`);
//     } else {
//         console.log(`No Team Wins`);
//     }
// }

// checkWinner1(scoreDolphin1 , scoreKoalas1);

// Array

// let friends = ['name1' , 'name2' , 'name3'];

// let y = new Array(214 , 2560 , 2016 , 2019);
// console.log(y);

// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends [ friends.length - 1]);

// friends[1]= 'name3';

// let firstName = 'mimmi';
// let detail = [firstName , 'lastName' ,  2024 - 1997 , friends];
// console.log(detail);


// const calAge = function (birthYear) {
//         return 2037 - birthYear ;
//     }
    
//     let year = [1970, 1996 , 2002 , 2014 ,2019];

//     // console.log(calAge(year));

//     let ageCalc1 = calAge(year[1]);
//     let ageCalc2 = calAge(year[0]);
//     let ageCalc3 = calAge(year[year.length - 1]);

//     console.log(ageCalc1 ,ageCalc2);

//     const array1 = [ calAge(year[1]) ,  calAge(year[0]) ,  calAge(year[year.length - 1])];
//     console.log(array1);