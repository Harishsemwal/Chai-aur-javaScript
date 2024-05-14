// // check Weather the number is Prime or not

// let isPrime = (n) =>{
//     if(n == 1){
//         console.log('nither Prime');
//     }
//     else if(n > 1){
//         for(let i = 2; i < Math.sqrt(n); i++){
//             if(n % i == 0){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// let n = 1;
// let flag = isPrime(n);
// if(flag){
//     console.log("Prime");
// }else{
//     console.log("Not Prime");
// }



// print all prime numbers:
// normally
// sieve Algoritham

function printPrime(val){
    prime = Array.from({length: val + 1}, (_) => true); 


    for(let p = 2; p <= val; p++){
        if(prime[p] == true){
            for(let i = p*p; i <= val; i += p){
                prime[i] = false;
            }
        }
    }

    for(let i = 2; i <= val; i++){
        if(prime[i] == true){
            console.log(i + " ");
        }
    }
}



let val = 30;
printPrime(val);
