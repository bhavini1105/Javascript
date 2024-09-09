// 435 - 50 = 385 // (50*0.50)=25
// 385 - 100 = 285 // (100*0.75)=75  
//25+75=100
// 285-100 = 185  // 100*1.20 = 120
// 100+120 = 220

// 185*1.50 = 277.5  //220 + 277.5 = 477.5

// 477.5*0.2 =99.5 

// total biil =99.5 + 477.5 = 597.00

let units = prompt(`Enter Your bill Units :`);
let bill = 0 ;

if(units <= 50){
    bill = 0.50 * units ;
}else if(units <= 100){
    bill = 25 + ((units-50) * 0.75);
}else if(units <= 250){
    bill = 75 + ((units-150) * 1.50); 
}else{
    bill = 220 + ((units-250) * 1.50);
}

let bills = bill * 0.20;
let totalBill = bills + bill ;

console.log(totalBill);
