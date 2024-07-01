

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

const ageUntilRetriment1 = (birthYear, firstName) => {
    const currentAge = 2025 - birthYear;
    const retrirementage = 65 - currentAge;
    // return retrirementage;
    return `${firstName}  retires in ${retrirementage}`
}
console.log(ageUntilRetriment1 (1992,'Boby'));
