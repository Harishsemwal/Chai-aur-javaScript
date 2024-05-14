// Find The Smallest Element in An array

function findSmall(arr){
    let mini = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < mini){
            mini = arr[i];
        }
    }
    return mini;
}

let arr = [3, 4 ,6 ,2 ,9];
let smallNumber = findSmall(arr);
console.log(`the small number is: ${smallNumber} `);


// another method: 

const findBoth = (arr) =>{
    const MinMax = {};
    arr.sort((a, b) => a - b);
    MinMax.min = arr[0];
    MinMax.max = arr[arr.length - 1];

    return MinMax;
}

const arr2 = [3, 4 ,6 ,2 ,9];
const MinMaxi = findBoth(arr2);
console.log(`The minimum number is ${MinMaxi.min} ans maximum ${MinMaxi.max}`);
