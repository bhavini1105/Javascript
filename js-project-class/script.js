/*
1. Create a School class and create a student , faculty and peon method and student name email contact print same as faculty 
and peon using class & object.
*/

class School {
    constructor(name, email, role) {
        this.name = name,
            this.email = email,
            this.role = role
    }
    student() {
        console.log(`I am ${this.role} and My name is ${this.name} and my Email id is ${this.email}`);
    }
    faculty() {
        console.log(`I am ${this.role} and My name is ${this.name} and my Email id is ${this.email}`);
    }
    peon() {
        console.log(`I am ${this.role} and My name is ${this.name} and my Email id is ${this.email}`);
    }
}

let s1 = new School('Virat', 'abc@123.gamil.com', 'student');
s1.student();

/* 

with one method

class School {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    details() {
        console.log(`I am a ${this.role}. My name is ${this.name} and my Email ID is ${this.email}.`);
    }
}


let student = new School('Virat', 'abc@123.gmail.com', 'student');
let faculty = new School('Ramesh', 'faculty@school.com', 'faculty');
let peon = new School('Suresh', 'peon@school.com', 'peon');


student.details();
faculty.details();
peon.details();

*/

/*
2.  Create a Person class and with argument create a Father and Child method father age of 60 and child age of 20 print with argument.
*/

class Person {
    constructor(age) {
        this.age = age
    }

    father() {
        console.log(`Age of Father is ${this.age}`);
    }
    child() {
        console.log(`Age of Child is ${this.age}`);
    }
}

let ft = new Person(60);
let cd = new Person(20);
ft.father();
cd.child();

/* 

with one method

class Person {
    constructor(role, age) {
        this.role = role;
        this.age = age;
    }

    display() {
        console.log(`The person is ${this.role} and age is ${this.age}.`);
    }
}

// Creating instances for Father and Child
let ft = new Person('father', 60);
let cd = new Person('child', 20);

// Displaying details
father.display('Father');
child.display('Child');

*/

/*
3.  Employee class create a constructor called print a simple message.
*/

class Employee {
    constructor() {
        console.log("Hello, this is an Employee class with constructor");
    }
}

let msg = new Employee();


/*

class Employee {
    constructor(print) {
        this.print = print
        console.log(` ${this.print}`);
    }
}

let msg = new Employee('hello');

*/

/*
4. Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and 
    rectangle area (width*height) using with argument.
*/

class Shape {
    constructor(radius, width, height) {
        this.radius = radius;
        this.width = width;
        this.height = height;
    }

    circle() {
        console.log(`The Area of Circle is ${3.14 * this.radius * this.radius}`);
    }

    rectangle() {
        console.log(`The Area of Rectangle is ${this.width * this.height}`);
    }
}


let cr = new Shape(20, 30, 15);
cr.circle();
cr.rectangle();

/*
class Shape {
    circle(radius) {
        console.log(`The Area of Circle is ${3.14 * radius * radius}`);
    }

    rectangle(width, height) {
        console.log(`The Area of Rectangle is ${width * height}`);
    }
}

// Create an instance of Shape
let shape = new Shape();
shape.circle(20);
shape.rectangle(30, 15);

*/

/*
5. Create a mobile functional class default set model no then set color using prototyping .
*/

function Mobile(modelNo, color) {
    this.modelNo = 123456789; 
    this.color = color;
}

Mobile.prototype.cl = function() {
    console.log(`Mobile's model No is ${this.modelNo} and color is ${this.color}`);
};

let m = new Mobile("", 'blue'); 
m.cl();

/*
6.Using Object prototyping create Emp function already added name, email, salary but not add designation. 
    designation add by object prototyping.
*/

function Emp(name , email , salary,designation){
    this.name = 'Yesha',
    this.email = 'yesha123@gail.com',
    this.salary = 15000,
    this.designation = designation
}

Emp.prototype.desg = function(){
    console.log(`Employee name is ${this.name} , Email-Id is ${this.email} , salary is ${this.salary} with ${this.designation} Designation`);
}

let ep = new Emp(" "," "," ","Staff")
ep.desg();