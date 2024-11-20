// class Animal {
//     constructor(name) {
//         this.name = name ;
//     }

//     speak(){
//         console.log(`${this.name} barks`);
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name);
//         this.breed = breed;
//     }

//     speak(){
//         console.log(`${this.name} runs `);
//     }
// }

// let myDog = new Dog('buddy','Husky');
// myDog.speak();

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} barks`);
//     }
// }

// class Dog extends Animal {
//     constructor(name , breed) {
//         super(name);
//         this.breed = breed ;
//     }

//     speak(){
//         console.log(`${this.breed}'s name is ${this.name} `);
//     }
// }

// class Cat extends Dog {
//     constructor(name , color) {
//         super(name);
//         this.color = color ;
//     }

//     speak(){
//         console.log(`${this.name}'s color is ${this.color}`);
//     }
// }

// let cat1 = new Cat('buddy','red');
// cat1.speak();    


//normal constructor

// memory consume for function also
// function Person(name , age ){
//   this.name = name ;
//   this.age = age;
//   function speak(){
//     console.log("Hello");
//   }
// }
// const person1 = new Person;
// console.log(person1);


// memory consume less only requireed
// non Parametric Constructor
// class person {

// }

// const name1 = new person;
// console.log(name1);


// parametric constructor
// class car {
//   constructor(name , model){
//     this.name = name ;
//     this.model = model;
//   }
// }

// const car1 = new car ('swift')
// console.log(car1);


class person {
    constructor(name,age){
        this.pName = name;
        this.age = age;
    }
}

class employee extends person{
    constructor(name){
        super(name)
    }
}

const mini = new employee('mini');
console.log(mini);
