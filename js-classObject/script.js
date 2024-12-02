// simple class

// class Person{
//     constuctor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     intro(){
//         console.log(`Hello... My name is${this.name} and age is ${this.age}`);  
//     }
// }

// const p1 = new Person('rahi',20);
// p1.intro();

// inheritance

/*

1. constructor
    A special method in a class.
    Automatically called when you create an object using new.
    Used to initialize object properties.

2. super
    Refers to the parent class.
    Used to call methods or the constructor of the parent class.
    In Teacher, the line super(name, age); calls the constructor of Person to initialize name and age.

3. extends
    Allows one class to inherit from another.
    Teacher extends Person means:
    Teacher gets all methods and properties from Person.
    Teacher can also add its own methods and properties.
  
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduction() {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);
    }
}

class Teacher extends Person {
    constructor(role, name, age) {
        super(name, age);
        this.role = role;
    }

    prole() {
        console.log(`My name is ${this.name} and I am a ${this.role}.`);
    }
}

const t1 = new Teacher('Math Teacher', 'Rahi', 20);
t1.prole();
t1.introduction();

/*
Polimorphism
    polymorphism as the ability to "change form." It allows the same method or function to work differently depending on 
    the objects or arguments it interacts with.
*/
