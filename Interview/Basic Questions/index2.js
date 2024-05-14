// Second Smallest and Second Largest element in an array


const second = (arr) =>{
    let mini = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < mini){
            mini = arr[i];
        }
    }
    console.log(mini);
    let smini = Number.MAX_VALUE;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smini && arr[i] != mini){
            smini = arr[i];
        }
    }
    return smini;
}

const arr = [4, 3 ,5, 6, 2];
const secondSmall = second(arr);
console.log(secondSmall);