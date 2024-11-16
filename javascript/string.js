//CASE:01-Traditional String events


const name="Saiful Islam";
const repositories= 50;
console.log(name +repositories+"valore");

//CASE:02-string interpolation is commonly used for string related showcasing.It is getting done in `backticks` and making here placeholders${}

console.log(`Hello! My name is ${name} and my repsitories no. are as count of ${repositories}`);


//CASE: 03- Object related String.
//'new' keyword for object literals of javascript; 
//After taking String(It's Constructor('text"))

const gameName= new String('Saifulire');
console.log(gameName);
console.log(gameName[0],gameName[3]);
console.log(gameName.__proto__);
//usecases of using new String object literals
//All Object methods are Must need for ${interview} preparation.

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('e'));
console.log(gameName.charAt(4));
console.log(gameName.indexOf('r'));


const newSurename= new String('Julkernain');
// const allname=newSurename.substring(0,4);
// console.log(allname);
const nullname=newSurename.slice(-1,5);
console.log(nullname.slice(-3,2));

//whitespacing getting ignored
//most of the time it need for taking usernaming input

const nameInput="   Mohammad Arkan   ";
console.log(nameInput);
console.log(nameInput.trim());

//url problem facing got detected
const url="https://www.saifulire.com/saiful%20shark";
console.log(url.replace('%20','-'));
console.log(url.includes('aiful'));
console.log(url.split('s'));

