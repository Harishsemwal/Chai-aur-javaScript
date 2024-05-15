// Object in JavaScrit

const student = {
    fullName : "Harish Semwal",
    marks : 94.4,
    printMarks : function(){
        console.log("Marks: "+ this.marks);
    },
}

// this: means here student.marks

// own prototype:

const employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
    calTax2 : function(){
        console.log("tax rate is 20%");
    }
}

// new Employee

const KaranArjun = {
    salary : 5040,
    calTax(){
        console.log("You have more advantage");
    }
};

KaranArjun.__proto__ = employee;