// object - key : value pair in {} 
// key is the variable name
//there are many ways to create an object
//{ } object literal syantax and it the easiest way to create an object
// object use for unstructured data and array is used for stuctured data

// const names = {
//   firstName : 'patel',
//   lastName : 'pihu',
//   job : 'student',
//   friends : ['mahi','ishani','pakhi']
// }

// // dot vs. brachet notion
// console.log(names);

// console.log(names.firstName);
// //(.)operation which goes to the object and retrive the property

// console.log(names['firstName']);
// //any Express 

// const nameKey = 'Name';
// console.log(names['first' + nameKey]);//this will not work with(.)

// // (.)=clean and easy
// // ([])=when we need to compute first property name / it gets evaluated 

// // prompt('')//built in fuction to take out put from user

// const interestedIn = prompt('what do you want to know name,job,friends');
// console.log(names.interestedIn); // undefined
// console.log(names[interestedIn]); // student


// if(names[interestedIn]){ // given property is available then condition true
//   console.log(names[interestedIn]);
// }
// else{ // property is not avilable
//   console.log('Wrong Choice !choose between name,job,friends');
// }

// how to use . & [] for add new properties to object
/*
person.location = 'abc';
person['area'] = 'xyz'; 

let str = `${names.fristname} has ${names.friend.length} and his best Friend is ${names.friend[0]}`;

object Methods

const names = {
  firstName : 'patel',
  lastName : 'pihu',
  birthYear : 1991,
  job : 'student',
  friends : ['mahi','ishani','pakhi'],
  licence : true
//    calcAge : function(birtYear){
//               return 2037 - birthYear;
//    }
    calcAge : function(){
              console.log(this);
              return 2037 - this.birthYear;
    }  
              calcAge : function(birtYear){
              this.age = 2037 - birthYear;
              return this.age;
   }  
}

console.log(names.calAge(1991)); // age in object and the age we gave it would be the same
console.log(name.calAge());
console.log(name.age);
console.log(names.[calAge('calAge)](1991))

const names1 = {
  firstName : 'patel',
  lastName : 'pihu',
  birthYear : 1991,
  job : 'student',
  friends : ['mahi','ishani','pakhi'],
  licence : true,
  calcAge : function(birtYear){
               return 2037 - birthYear;
  }
  summary : function(){
        return  `${this.firstName} is ${this.calAge()} old ${this.job} he has ${this.licence? 'a' : 'no'} licence`;
    }
}

// function can also have key value pair - as it produces the value
// any function that is attactched to and object that is method
// method is also a property that hold a function value

array are also an  object(special) the method of array we use to manipulate the array

*/

// let person = {
//     name: "John",         
//     age: 30,               
//     greet: function() {    
//       console.log("Hello, my name is " + this.name);
//     }
//   };

let obj1 = {
    name: 'Vini Patel',
    age: 22,
    email: 'abc@gmail.com',
    contact: 1204567893,
    address: {
        city: 'Navsari',
        area: 'Sarpore'
    }
};

document.getElementById('obj1').innerHTML = `
    <p><strong>Name:</strong> ${obj1.name}</p>
    <p><strong>Age:</strong> ${obj1.age}</p>
    <p><strong>Email:</strong> ${obj1.email}</p>
`;

let students = [{
    name: 'Rahul Sharma',
    age: 25,
    email: 'rahul@gmail.com',
    contact: 9876543210,
    address: {
        city: 'Ahmedabad',
        area: 'Maninagar'
    }
},
 {
    name: 'Priya Mehta',
    age: 28,
    email: 'priya@gmail.com',
    contact: 7894561230,
    address: {
        city: 'Surat',
        area: 'Adajan'
    }
},
{
    name: 'Karan Joshi',
    age: 24,
    email: 'karan@gmail.com',
    contact: 9638527410,
    address: {
        city: 'Vadodara',
        area: 'Alkapuri'
    }
},
{
    name: 'Rita Singh',
    age: 30,
    email: 'rita@gmail.com',
    contact: 8527419630,
    address: {
        city: 'Rajkot',
        area: 'Kalavad Road'
    }
},
{
    name: 'Amit Desai',
    age: 27,
    email: 'amit@gmail.com',
    contact: 9517534568,
    address: {
        city: 'Bhavnagar',
        area: 'Kalanala'
    }
},
{
    name: 'Sneha Trivedi',
    age: 23,
    email: 'sneha@gmail.com',
    contact: 7895123486,
    address: {
        city: 'Anand',
        area: 'Gamdi'
    }
},
{
    name: 'Vishal Pandey',
    age: 29,
    email: 'vishal@gmail.com',
    contact: 9872314568,
    address: {
        city: 'Junagadh',
        area: 'Moti Baug'
    }
},
{
    name: 'Nidhi Shah',
    age: 26,
    email: 'nidhi@gmail.com',
    contact: 9638521470,
    address: {
        city: 'Gandhinagar',
        area: 'Sector 22'
    }
},
{
    name: 'Rohan Patel',
    age: 21,
    email: 'rohan@gmail.com',
    contact: 9512364780,
    address: {
        city: 'Porbandar',
        area: 'Chowpatty'
    }
},
{
    name: 'Meera Chauhan',
    age: 32,
    email: 'meera@gmail.com',
    contact: 8529637410,
    address: {
        city: 'Jamnagar',
        area: 'Patel Colony'
    }
},
{
    name: 'Rajeev Verma',
    age: 35,
    email: 'rajeev@gmail.com',
    contact: 7896541230,
    address: {
        city: 'Amreli',
        area: 'Station Road'
    }
},
{
    name: 'Ritu Agarwal',
    age: 24,
    email: 'ritu@gmail.com',
    contact: 9514682370,
    address: {
        city: 'Valsad',
        area: 'Tithal Road'
    }
},
{
    name: 'Vikram Thakur',
    age: 28,
    email: 'vikram@gmail.com',
    contact: 7896543214,
    address: {
        city: 'Dahod',
        area: 'Zalod'
    }
},
{
    name: 'Anjali Bhatt',
    age: 31,
    email: 'anjali@gmail.com',
    contact: 9632587410,
    address: {
        city: 'Mehsana',
        area: 'Pilaji Ganj'
    }
},
{
    name: 'Rakesh Jha',
    age: 29,
    email: 'rakesh@gmail.com',
    contact: 7539518462,
    address: {
        city: 'Patan',
        area: 'Subhash Nagar'
    }
},
{
    name: 'Deepa Joshi',
    age: 33,
    email: 'deepa@gmail.com',
    contact: 9517531234,
    address: {
        city: 'Nadiad',
        area: 'Santram Road'
    }
},
{
    name: 'Akash Shah',
    age: 22,
    email: 'akash@gmail.com',
    contact: 7531594862,
    address: {
        city: 'Bharuch',
        area: 'Zadeshwar'
    }
},
{
    name: 'Kavya Desai',
    age: 27,
    email: 'kavya@gmail.com',
    contact: 8527419632,
    address: {
        city: 'Modasa',
        area: 'College Road'
    }
},
{
    name: 'Vivek Patel',
    age: 26,
    email: 'vivek@gmail.com',
    contact: 7896541320,
    address: {
        city: 'Bhuj',
        area: 'Mandvi Road'
    }
},
{
    name: 'Aryan Singh',
    age: 24,
    email: 'aryan@gmail.com',
    contact: 9514862379,
    address: {
        city: 'Kutch',
        area: 'Bhujodi'
    }
},
{
    name: 'Neha Kapoor',
    age: 30,
    email: 'neha@gmail.com',
    contact: 7896547891,
    address: {
        city: 'Gandhidham',
        area: 'Adipur'
    }
},
{
    name: 'Siddharth Tiwari',
    age: 28,
    email: 'siddharth@gmail.com',
    contact: 9876547412,
    address: {
        city: 'Surendranagar',
        area: 'Wadhwan'
    }
},
{
    name: 'Priya Iyer',
    age: 26,
    email: 'priya.iyer@gmail.com',
    contact: 7539517896,
    address: {
        city: 'Navsari',
        area: 'Lunsikui'
    }
},
{
    name: 'Arjun Verma',
    age: 23,
    email: 'arjun@gmail.com',
    contact: 9512368745,
    address: {
        city: 'Morbi',
        area: 'Rafaleshwar'
    }
},
{
    name: 'Rohit Sharma',
    age: 31,
    email: 'rohit@gmail.com',
    contact: 7896543212,
    address: {
        city: 'Palanpur',
        area: 'Abu Highway'
    }
},
{
    name: 'Mona Jain',
    age: 27,
    email: 'mona@gmail.com',
    contact: 8529638741,
    address: {
        city: 'Dhoraji',
        area: 'Junagadh Highway'
    }
},
{
    name: 'Kunal Vora',
    age: 25,
    email: 'kunal@gmail.com',
    contact: 9517537894,
    address: {
        city: 'Chhota Udaipur',
        area: 'Raj Mahal Road'
    }
},
{
    name: 'Pooja Shah',
    age: 29,
    email: 'pooja@gmail.com',
    contact: 7896549871,
    address: {
        city: 'Vapi',
        area: 'Gunjan'
    }
},
{
    name: 'Ankit Gupta',
    age: 32,
    email: 'ankit@gmail.com',
    contact: 9632587412,
    address: {
        city: 'Himmatnagar',
        area: 'Kansa Road'
    }
},
{
    name: 'Priyanka Chaudhry',
    age: 26,
    email: 'priyanka@gmail.com',
    contact: 9632580012,
    address: {
        city: 'Manipur',
        area: 'Kansa Road'
    }
}
]

let stud = document.getElementById('student');

students.forEach((student) => {
    stud.innerHTML += `<div class="col">
        <div class="card">
            <img src="./images1.jpeg" class="card-img-top" alt="..." style="height: 150px; width: 150px;margin: auto;">
            <div class="card-body">
                <h6><strong>${student.name}</strong</h6>
                <h6><strong>Age :</strong>${student.age}</h6>
                <h6><strong>Email :</strong>${student.email}</h6>
                <h6><strong>Address :</strong> ${student.address.area}, ${student.address.city}</h6>
            </div>
        </div>
    </div>`;
});




//   console.log(person.name);
  
// let user = [
//   {
//     name :'abc',
//     userName : 'abc123',
//     id: '4756'
//   },
//   {
//     name : 'neha',
//     userName :'n145',
//     id : 6956
//   },
//   {
//     name : 'isha',
//     userName :'isha154',
//     id : 2659
//   },
//   {
//     name : 'nikita',
//     userName : 'nk2654',
//     id : 1256
//   }
// ]


