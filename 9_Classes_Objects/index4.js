// Super Keyword: 
// The super keyword is used to call the constructor of its parent class to access the parent's properties and method.

class person{
    constructor(){
        this.sp = "hs";
    }

    eat(){
        console.eat("food");
    }
}

class child extends person{
    constructor(){
        super(); //to invoke parent constructor
        this.branch = this.branch;
    }

    work(){
        console.log("Build Something");
    }
}

let engObj = new child("CSE");



// class person{
//     constructor(name){
//         this.sp = "hs";
//         this.name = name;
//     }

//     eat(){
//         console.eat("food");
//     }
// }

// class child extends person{
//     constructor(){
//         super(name); //to invoke parent constructor
//         this.branch = this.branch;
//     }

//     work(){
//         console.log("Build Something");
//     }
// }

// let engObj = new child("CSE");