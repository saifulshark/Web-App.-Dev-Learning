const score= 400;
console.log(score);

const balance= new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(typeof(balance.toString()));
console.log(balance);

const accountBalance=3000;
const newAcBalance= new Number(accountBalance);
const x=newAcBalance;
console.log(x.toFixed(2));
console.log(accountBalance);

const checkPrecision = 123.6789;
console.log(checkPrecision.toPrecision(1));
console.log(checkPrecision.toPrecision(2));
console.log(checkPrecision.toPrecision(3));
console.log(checkPrecision.toPrecision(10));

const hundreds=80000000;
console.log(hundreds.toLocaleString('en-IN'));