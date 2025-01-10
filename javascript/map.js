const myNumArray=[1,2,3,4,5,6,7,8,9,10]
const myStringArray=['a','b','c','d','e','f','g','h','i','j']
const myObjectArray=[{name:'a',age:1},{name:'b',age:2},{name:'c',age:3},{name:'d',age:4},{name:'e',age:5},{name:'f',age:6},{name:'g',age:7},{name:'h',age:8},{name:'i',age:9},{name:'j',age:10}]
const x = myNumArray.map((num)=>{return num*num})
const y = myStringArray.map((str)=>{return str.toUpperCase()})
const z = myObjectArray.map((obj)=>{return obj.name})
const z1 = myObjectArray.map((obj)=> obj.age)
console.log(x);
console.log(y);
console.log(z);
console.log(z1);
