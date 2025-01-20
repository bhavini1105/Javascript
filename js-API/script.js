/*

1. fetch("https://jsonplaceholder.typicode.com/users")
The fetch function is used to send a request to the given URL
It returns a Promise that resolves to the response of the request.

2. .then((data) => { return data.json(); })
This .then block is called when the fetch request is successful.
data contains the response object.
data.json() is a method that converts the response body (data) from JSON format into a JavaScript object.

3. .then((myData) => { console.log(myData); }) 
The myData variable now holds the JavaScript object converted from JSON.
console.log(myData) logs this object to the console.

4. .catch((e) => { console.log(e); })
If any error occurs during the fetch request or while processing the data, the .catch block is executed.
The error e is logged to the console.


*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    return data.json(); 
})
.then((myData) =>{
    console.log(myData);
})
.catch((e) => {
    console.log(e);
})