// const employee = {
//     salary : 25000,
//     callBack(){
//         console.log("Harish");
//     },
//     callBack : function(){
//         console.log("semwal");
//     }
// }

// console.log(employee.callBack());

// class Employee{
//     constructor(){
//         console.log("I am Always Win");
//     }
//     callBack(){
//         console.log("Yes I am Here");
//     }
// }
// let fortuner = new Employee();
// fortuner.callBack();



class parent {
    constructor(name) {
        this.myname = name;
        console.log("Parent");
        console.log(this.myname);
    }
}
class child extends parent{
    constructor(branch) {
        super();
        this.mybranch = branch; 
        console.log("Child");
        console.log(this.mybranch);
    }
}

let obj = new child("Hari");
