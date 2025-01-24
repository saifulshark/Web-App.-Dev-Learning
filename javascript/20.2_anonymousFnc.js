function callonback(a, b, callback) {
    console.log(a);
    console.log(callback);
    let x=callback(a)+callback(b);
    return x;
}
let k= callonback(2,3,function(a){
    return a*a;
});
console.log(k);