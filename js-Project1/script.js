alert("Hello....Welcome....");

let uname = prompt(`Enter Your Name`);
console.log(uname);

let name1 = document.getElementById("username");
name1.innerHTML = uname;

let num = parseInt(prompt(`Enter First Number`));
let num1 = parseInt(prompt(`Enter Second Number`));

if (!(num == num) || !(num1 == num1)) {
    alert("Input Valid Numbers..");
}
else {
    console.log(num);
    console.log(num1);

    let number = document.getElementById("num");
    number.innerHTML = num;

    let number1 = document.getElementById("num1");
    number1.innerHTML = num1;
    let choice = parseInt(prompt(`Enter Choice (1 -> +) ,(2 -> -), (3 -> *), (4 -> /)`));
    let calc;

    if (choice === 1) {
        calc = num + num1;
    }
    else if (choice === 2) {
        if (num > num1) {
            calc = num - num1;
        }
        else {
            calc = num - num1;
            console.log("2nd Number is higher");
        }
    }
    else if (choice === 3) {
        if (num == 0 || num1 == 0) {
            console.log("Number is Zero");
        }
        else {
            calc = num * num1
        }
    }
    else if (choice === 4) {
        if (num == 0 || num1 == 0) {
            calc = 0;
        }
        else {
            calc = num / num1
        }
    }
    else {
        console.log("Number is Invalid");
    }

    console.log(calc);

    let calcutation = document.getElementById("cal");
    calcutation.innerHTML = calc;
}