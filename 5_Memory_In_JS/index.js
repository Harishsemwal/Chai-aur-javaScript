// Stack: Preemtive Values
// Heap : Non Preemtive Values

let myName = "HarishSemwal";
let anotherName = myName;
anotherName = "Semwal_g";

console.log(myName);
console.log(anotherName);


let user = {
    email: "username@gmail.com",
    upi: "user@xoxo",
}
console.log(user);
let userTwo = user;
userTwo ={
    email : "harish@mail.com",
    upi: "coco@moco",
}
console.log(user);
console.log(userTwo);