const z={
    username:"Islam",
    age:25,
    mission:"Software Engineer",
    vision: function(){
        console.log(`I want to be a Successful Entreprenuer and IoT based ${z.mission} who inshaAllah know IoT,Software Eng.,DevOps,AI,Blockchain and Hardware Stuffs as well`);
    }
}
const obj = {
    user1name: "Saifulire",
    printName: function() {
        console.log(this.user1name);
        console.log(z.username);
    }
};


function car(companyMadeIn, model, seriesYear, valuePrice, color){
    this.companyMadeIn=companyMadeIn;
    this.model=model;
    this.seriesYear=seriesYear;
    this.valuePrice=valuePrice;
    this.color=color;
    this.vision=z.vision;
    this.drive=function(){
        console.log(`Boss ${obj.user1name}is driving ${this.model} car that is made in ${this.companyMadeIn}  and it's color is ${this.color} and it's price is ${this.valuePrice}`);
    }
}
const car1= new car("Audi:Germany","R8",2019,"100k$","Black");
const car2= new car("BMW:Germany","X7",2018,"90k$","White");
const car3= new car("Mercedes:Germany","S-Class",2017,"80k$","Silver");
const car4= new car("Toyota:Japan","Corolla",2016,"20k$","Black");
const car5= new car("Honda:Japan","Civic",2015,"25k$","White");
const car6= new car("Suzuki:Japan","Swift",2014,"15k$","Silver");
const car7= new car("Kia:Korea","Sportage",2013,"30k$","Black");
const car8= new car("Hyundai:Korea","Tucson",2012,"35k$","White");
const car9= new car("Ford:USA","Mustang",2011,"40k$","Silver");
const car10= new car("Chevrolet:USA","Camaro",2010,"45k$","Black");
// console.log(car1);
car1.drive();
car1.vision();

