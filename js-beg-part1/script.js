//  let js='amazing';

//  if(js === 'amazing') alert(`Javascript is amazing language`);

// let country = "India";
// let continent = "Delhi";
// let population = "1.2 billlions"

// console.log(country, continent, population);

//  basic operators

// const now= 2035;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log( ageJonas , ageSarah);

// console.log(ageJonas*2 , ageJonas/10 , 2**3);
// 2**3 means 2 to powerof 3 = 2*2*2 

// const firstName = 'Bhavini';
// const lastName = 'Patel';

// console.log(firstName + '' + lastName); // concatination

// Assignment Operators

// let x =10+5;
// x+= 10; //x= x+10 =25
// x*= 4 //x = x* 4 =100
// x++; // x= x+1
// x--;
// x--;
// console.log(x);

// Comparision Operators

// console.log(ageJonas > ageSarah); // < , > , >= , <=  returns Boolean Values
// console.log(ageSarah >= 18);


// const now= 2035;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x,y;
//  x = y = 25-10-5; // x=y=10
// console.log(x,y);

// const averagAge= (ageJonas + ageSarah) / 2;
// console.log(ageJonas , ageSarah , averagAge);

// let weight1 = prompt('Enter  1st Weight :');
// let height1 = prompt('Enter 1st Height :');
// let weight2 = prompt('Enter  2nd Weight :');
// let height2 = prompt('Enter 2nd Height :');

// let bmi1 = weight1 / ( height1**2)
// let bmi2 = weight2 / ( height2**2)

// console.log(bmi1 , bmi2);

// if(bmi1 > bmi2){
//     console.log(`1st persons's BMI(${bmi1}) is Heigher than 2nd person's BMI (${bmi2})`);
// }
// else{
//     console.log(`"2nd persons's BMI (${bmi2}) is Heigher than 1st person's BMI (${bmi1})`);
// }


// const firstName = "Bhavini";
// const occupation = "Student";
// const birthYear = 1999;
// const year = 2035;

// const nameSting = "I'm" + firstName + "a" + (year - birthYear) + "Year old" + occupation; //use to create astring befor ES6

// const nameString1 = `I'm $(FirstName) $(year - birthYear) year old $(occupation)`; // templete string ex backtick also use to write  any string

// console.log(nameString1);

// console.log(`Just a regular String..`);

// if(condition){
//     }
//else{
//     }
//this is call control structure as it have more control over the code when it is executed

// const age =prompt(`Enter Your Age :`);


// if( age >= 18){
//     console.log("You Can start driving ");
// }
// else{
//    const yearLeft = 18 - age;
//    console.log(`Years left to get licence is ${yearLeft} years`);
// }

// const birthYear = prompt(`Enter Your Birth Year:`);
// let century;
// if(birthYear<= 2000){
//      century = 20;
// }else{
//      century = 21;
// }
// console.log(century);

// Type Conversion- it means we manually convert from one to another
// Type Coerion - it means javascript automatically converts types

// Functions for Type Conversion
// Stringto Number - Number()
// Number to String - String()

// const inputYear = '1991';
// console.log(Number(inputYear) , inputYear);
// console.log( Number(inputYear) + 18);

// console.log(Number(`Hello`)); //Nan
// console.log(typeof NaN);

// type coercion

// console.log('i am' + 20 + 'year old')

// console.log('23' - '10' -3); //substraction
// console.log('23' + '10' +3); //concatination
// console.log('23' *'2'); //mulipkication

// let n= '1' + 1;
// n= n-1;
// console.log(n);


// flasy values all values converted to false when weattempt to convert them to boolean
// 1. 0
// 2. NAN
// 3. ""
// 4.null
// 5. undefined
// 6.false

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('hello'));
// console.log(Boolean(''));
// console.log(Boolean({}));

// const money=0;
// if(money){
//     console.log("Don't spend it all")
// }else{
//     console.log('You should get a job!')
// }

//Logical Operators
// 1.And
// 2.Or
//3.Not

// const hasDrriverLicence = true //A
// const hasGoodVision = false //B

// console.log(hasDrriverLicence && hasGoodVision);
// console.log(hasDrriverLicence || hasGoodVision);
// console.log(!hasDrriverLicence );
// console.log(!hasGoodVision);



// if(hasDrriverLicence && hasGoodVision){
//     console.log("Person Shold Drive");
// }else{
//     console.log("Person Shold not Drive")
// }

// const isTired = true; //c
// console.log(hasDrriverLicence && hasGoodVision && isTired);

// if(hasDrriverLicence && hasGoodVision && !isTired){
//     console.log("Person Shold Drive");
// }else{
//     console.log("Person Shold not Drive")
// }


// let dolphinScore1 = 96 // prompt(`Enter Score of round1 for Dolphin`);
// let dolphinScore2 =108  // prompt(`Enter Score of round2 for Dolphin`);
// let dolphinScore3 = 89 // prompt(`Enter Score of round3 for Dolphin`);

// let koalasScore1 = 97; //  prompt(`Enter Score of round1 for Koalas`);
// let koalasScore2 = 89; // prompt(`Enter Score of round2 for Koalas`);
// let koalasScore3 = 110; // prompt(`Enter Score of round3 for Koalas`);

// let scoreDolphin = parseInt((dolphinScore1 + dolphinScore2 + dolphinScore3) / 3);
// let scoreKoalas = parseInt((koalasScore1 + koalasScore2 +koalasScore3) / 3) ;

// console.log(scoreDolphin);
// console.log(scoreKoalas)

// if(scoreDolphin > scoreKoalas){
//     console.log("Dolphins win the Trophy")
// }else if(scoreDolphin === scoreKoalas){
//     console.log("Both win the Trophy");
// }else{
//     console.log("Koalas win the Trophy");
// }

// let dolphinScore1 = 97; // prompt(`Enter Score of round1 for Dolphin`);
// let dolphinScore2 =92;  // prompt(`Enter Score of round2 for Dolphin`);
// let dolphinScore3 = 92; // prompt(`Enter Score of round3 for Dolphin`);

// let koalasScore1 = 79; //  prompt(`Enter Score of round1 for Koalas`);
// let koalasScore2 = 95; // prompt(`Enter Score of round2 for Koalas`);
// let koalasScore3 = 106; // prompt(`Enter Score of round3 for Koalas`);

// let scoreDolphin = parseInt((dolphinScore1 + dolphinScore2 + dolphinScore3) / 3);
// let scoreKoalas = parseInt((koalasScore1 + koalasScore2 +koalasScore3) / 3) ;

// console.log(scoreDolphin);
// console.log(scoreKoalas);

// if(scoreDolphin > scoreKoalas && scoreDolphin >= 100){
//     console.log("Dolphins win the Trophy")
// }else if(scoreDolphin < scoreKoalas && scoreKoalas >= 100){
//     console.log("Koalas win the Trophy");
// }else if(scoreDolphin === scoreKoalas && scoreDolphin >=100 &&scoreKoalas>=100){
//     console.log("Both win the Trophy");
// }else{
//     console.log("No One Wins the Trophy");
// }

// Switch Statemantes

// switch(what to swich){
// case '' :
//  console.log()
// break; }

// const day = prompt('Enter Any Day of Week');

// switch (day) {
//     case 'Monday': // day === 'Monday' -> check strict eqality
//         console.log('Course Structure');
//         console.log('Coding');
//         break;
//     case 'tuesday':
//         console.log('theory');
//         break;
//     case 'wednesday' :
//     case'tursday' :
//         console.log('examples');
//         break;
//     case 'friday' :
//         console.log('Videos');
//         break;
//     case'saturday' :
//     case 'sunday' :
//         console.log('weekends');
//         break;
//     default:
//         console.log('Not a Vlid Day !');
// }

// Expression  

// 3 + 4  //Expression is a piece of code that produces a valve
// 1991 // expression
// true && false && !false //also expreession because it produces the boolean Values

// Statement  (like full sentence that translates actions)

// it is abigger pices of code that is executed and it does not produces a value on itself(like normal spoken language)

// if( 23 > 10){
//     const str = '23 is bigger'; (statement -> not produce value -> ends with semicolon)
// }  (if - else Statement & switch is also a statement)

// string it self is also an expression

// condition operator or ternary operator (itisuse to write if0else statement in one line)

// operator always produces a value that's why is also called as expression

// const age = 23;
// age >= 18 ? console.log('allow to drive'):  //(if block)
// console.log('not allow  to drive')   //(elsr block)

// const drivingAge = age >= 18 ? 'Allowed' : 'Not Allowed';
// console.log(drivingAge);

// let drivingAge1 ;
// if(age >= 18){
//     drivingAge1 = 'Allowed';
// }else{
//     drivingAge1 = 'Not Allowed';
// }
// console.log(drivingAge1);

// console.log(`You are ${age >= 18 ? "Allowed" : "Not Allowed"} to Drive`);

// let bill = 430 , tip , totalbill;

// tip = bill >= 50 && bill <=300 ?  tip = bill * 0.15 : tip = bill * 0.2 ;

// console.log(tip)
// console.log(totalbill = bill + tip)

