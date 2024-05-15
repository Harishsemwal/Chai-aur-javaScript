// Syncr & Asyncr

console.log("Hello");
console.log("Harish");

setTimeout(() => {
    console.log("Semwal_g");
}, 4000)

console.log("wow");


// CallBack : 
function sum(a, b){
    console.log(a + b);
}
function calculator(a, b, call){
    call(a, b);
}

calculator(1, 2, sum);


// CallBack Hell : 


function getData(){
    console.log("data: ", dataID);
}

setTimeout(() => {
    console.log("data", dataID);
}, 4000);



// Nested : 

function getData(dataID, getNextData){
    setTimeout(() => {
        console.log("data: ", dataID);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}
getData(1, getData(2));

getData(1, ()=>{
    getData(2, ()=>{
        getData(3);
    })
})


// Promise

let promise = new Promise((resolve, reject) => {
    console.log("I am Promise");
    resolve(123);
});

// Example: 

function getData(dataID, getNextData){
    return new Promise((resolve, reject) => {
        getTimeOut(()=>{
            console.log("data", dataID);
            resolve("success");
        });
        if(getNextData){
            getNextData();
        }
    }, 5000);
}

function getData(dataID, getNextData){
    return new Promise((resolve, reject) => {
        getTimeOut(() => {
            console.log("data", dataID);
            resolve();
        })
        if(getNextData){
            getNextData();
        }
    }, 5000);
}

getData(1, ()=>{
    getData(2, ()=>{
        getData(3);
    })
})
