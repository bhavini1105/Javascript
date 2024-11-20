// let str = prompt(`Enter String:`);
// let str1 = str.toLowerCase();
// let c = 0 , d = 0;
// let n = str.length;

// console.log(`Total Number of String is ${n}`);


// for(let i = 0 ; i < n ; i++){
    
//     if(str1[i] == 'a' || str1[i] == 'e' || str1[i] == 'i' || str1[i] == 'o' || str1[i] == 'u' ){
//         c++;
//     }
//     else{
//         d++;
//     }
// }

// console.log(`Number of Vowel is ${c}`);
// console.log(`Number of Consonant is ${d}`);



// let num = prompt(`Enter Any Number`);

// function identifyPrime(num) {
 
//     if(num <= 1)
//         console.log("No" );
    
//     for(let i = 2 ; i*i <= 2; i++ ){
//         if( n % i === 0){
//             console.log("No");
            
//         }
//     }
//      console.log("YES");
    
// }

// identifyPrime(num);

let arr = [1, 1, 3, 4, 5, 5, 6, 7, 8, 8];
let n = arr.length;
let arr2 = [];
let count = 0;
let sum = 0;

function checkpalindrome(n,arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < i ; j++){
            if( arr[i] === arr[j]){
                arr2.push(arr[i]);
            }
        }
    }
    for(let k = 0 ; k = arr2.length ; k++){
        sum += arr2[k];
    }
    console.log(sum);
}

checkpalindrome(n , arr);

