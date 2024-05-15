// Inheritance in JavaScript

// Passing down the parent properties into child object 

class parent{
    hello(){
        console.log("Hello");
    }
}

class child extends parent{
    work(){
        console.log("work");
    }
}

let object = new child();
console.log(object.hello());

// when child and parent have same method then this is called method overriding
// then child Method called first


