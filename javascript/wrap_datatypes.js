//data types are two types
//primitive data types
//basically 7 types here: String,Number,Boolean,null,undefined,Symbol,BigInt(big number or big scientific number)

const score= 100;
const scoreValue=100.4;
const isLoggedIn=true;
const isTimeOut=false;
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(anotherId);
console.log(id);
console.log(id==anotherId);
console.log(id===anotherId);

//non-primitive data types(pass by reference:)
//Array,Objects,Functions

const heros=["Muhammand","King of The World","Best influential man in the world"];
let myObj={
    name: "Saiful Islam",
    age: 23.5,
    id_no: 2001025,
}
const myfun=function(){
    console.log("Howdy!Man, What is going on?");
}
console.log(typeof heros,typeof myObj,typeof myfun);
