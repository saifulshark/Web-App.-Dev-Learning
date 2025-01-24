let n=5;
function eqn(x)
{
    return n*x;
}
function eqn1(y)
{
    return n/y;
}
//dual pass callback function
function callonback(a,b,fn)
{
    return fn(a)+fn(b);
}
//single pass callback function
function callb(m,fn)
{
    return fn(m);
}
function cb(a,b,fn)
{
    console.log(fn);
    return fn(a,b);
}
let i= cb(2,3,function(n){return n*n});
console.log(i);
let j= callb(1,eqn);
let k= callonback(2,3,eqn);
let l= callonback(2,3,eqn1);
console.log(k);
console.log(l);
console.log(j);
