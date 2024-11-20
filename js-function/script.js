/* Functions
function is peice of code that we can re use over and over in code
function functionName(parameters){
 function body; // executes code when function is called
}

function logger(){
  console.log('My Name is ....');
}

//calling / running / invoking function
logger();

function can also receive data and returns data

function fruitProcessor(apples , oranges){
    console.log(apples , oranges);
    const juice = `Juice With ${apples} and ${Oranges}`
}

fuction fruitProcessor (apple , orange){
    console.log(apples , oranges);
    const juice = `Juice With ${apples} and ${Oranges}`;

    return juice;
}
const appleJuice = fruitProcessor(5,0)
console.log(appleJuice);

Function Declration and Function Expression

Function Declration
function age1(birthYear){
     return 2024 - birthYear;
 }

 const age = age1(1991);
 console.log(age)

 Function Expression - produces a value and store it into a variable

  const age2 = function (birthYear) {
     return 2037- birthYear;
 }

 const agecalc2 =  age2(1992);
 console.log(age2); 

 // Arrow Function - did not take this keyword 

 const calacage = birthYear => 2037-birthYear;

 const age3 =calacage(1997);
 console.log(age3);

 const ageUntilRetriment = birthYear => {
     const currentAge = 2025 - birthYear;
     const retrirementage = 65 - currentAge;
     return retrirementage;
 }
 console.log(ageUntilRetriment);

 const ageUntilRetriment1 = (birthYear, firstName) => {
     const currentAge = 2025 - birthYear;
     const retrirementage = 65 - currentAge;
     // return retrirementage;
     return `${firstName}  retires in ${retrirementage}`
 }
 console.log(ageUntilRetriment1 (1992,'Boby'));

 function cutPieces(fruit){
  return fruit * 4 ;
 }

 function fruitProcessor(apple , orange){
  const applePieces = cutPieces(apple); 
  const orangePieces = cutPieces(oranges); 

  const juice = `Juice With ${applePeices} piece of Apple and ${OrangePiece} piece of Orange`;
  return juice
 }

 console.log(fruitProcessor(2,3));

  const calAge = function (birthYear) {
     return 2037 - birthYear ;
 }

 const ageUntilRetriment = function (birthYear , firstName) {
     const age = calAge(birthYear);

     const retrirementage = 65 - age ;

   if(retrirementage > 0){
           console.log(`${firstName}  retires in ${retrirementage}`);
         return retrirementage;
     }else{
        console.log(``${firstName} has already  retired`)
         return -1;
     }
 }
 console.log(ageUntilRetriment(1992 , 'nick'));
 console.log(ageUntilRetriment(1952 , 'virat'));

 const calcAverage = (a,b,c) =>(a + b + c) / 3;
console.log(calcAverage(44 , 23 , 71));

const scoreDolphin = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);

console.log(scoreDolphin ,scoreKoalas);

const checkWinner = function (avgDolphin , avgKoalas) {
    
    if(avgDolphin >= 2*avgKoalas){
        console.log(`Dolphin Team wins with ${avgDolphin} vs. ${avgKoalas}`);
    }
    else if( avgKoalas >= 2* avgDolphin){
        console.log(`Koalas Team wins with ${avgKoalas} vs. ${avgDolphin}`)
    }else{
        console.log(`No Team  Wins`);
    }
}

checkWinner(scoreDolphin , scoreKoalas);
// checkWinner(576 , 111);


const calcAverage1 = (a ,b ,c) => (a+b+c)/3
calcAverage1( 1 , 2 , 3);

const scoreDolphin1 = calcAverage1(120 , 56 , 57);
const scoreKoalas1 = calcAverage1(20 , 526 , 157);

const checkWinner1 = function ( avgDolphin1 , avgKoalas1 ){
    if (avgDolphin1 >= 2*avgKoalas1) {
        console.log(`Dolphin Wins`);
    }else if (avgKoalas1 >= 2*avgDolphin1) {
        console.log(`Koalas Wins`);
    } else {
        console.log(`No Team Wins`);
    }
}

checkWinner1(scoreDolphin1 , scoreKoalas1);

*/

// function sum (a,b){
//     return a + b;
// }

// console.log(sum(5,2));

// const sub = function(x,y){
//     return x - y;
// }
// console.log(sub(330 , 60));


// function sum(a,b){
//     console.log(a+b);
// }

// function sum(a,b,c) {
//     console.log(a+b+c);
// }

// sum(5,7)
// sum(5,7,6)

