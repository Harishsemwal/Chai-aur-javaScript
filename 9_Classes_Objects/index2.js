// class in javaScirpt

// Class is a program-code template for creating Object. 

class ToyotaCar{
    constructor(){
        console.log("creating new object");
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.BrandName = brand; 
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Thunders");


