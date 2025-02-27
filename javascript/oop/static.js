class MathUtil{
    static PI= 3.14159;
    static diameter(r){
        return 2*r;
    }
    static circumference(r){
        return 2*this.PI*r;
    }
    static area(r){
        return this.PI*r*r;
    }
}
const MathUtil1 = new MathUtil();
console.log("M1:");
console.log(MathUtil1.PI);//undefined

console.log("M:");
console.log(MathUtil.PI);
console.log(MathUtil.diameter(5));
console.log(MathUtil.circumference(5));
console.log(MathUtil.area(5));