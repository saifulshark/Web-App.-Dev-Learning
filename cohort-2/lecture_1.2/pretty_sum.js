function sum(a, b) {
    return a + b;
}
function displayPrettySum(a, b) {
    let result = sum(a, b);
    // console.log(`The sum of ${a} and ${b} is: ${result}`);
    return result;
}
let num1 = 5;
let num2 = 7;

// displayPrettySum(num1, num2);
function passiveSum(num1,num2)
{
    let result= displayPrettySum(num1,num2);
    console.log(`The sum of ${num1} and ${num2} is calculate to be: ${result}`);
}
passiveSum(num1,num2);