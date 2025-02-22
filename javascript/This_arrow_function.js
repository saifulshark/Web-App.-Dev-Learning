//This will mostly covered in prototypal inheritence and in Prototype
//This keyword tells you about current context
//arrow function-->This-->Object
//In Arrow function does not usually support this keyword
//This talks about not on current context(sometimes) but talks about current values
//Inside the Browser's Global Object is Window Object
//This works in Object context not in Function



// const user = {
//     username: "hitesh",
//     price: 999,
// //////for login welcoming message by running a method
//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// // user.welcomeMessage()
// // user.username = "sam"
// // user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai();


// const chai = () => {
//     let username="Lala";
//     console.log(this);
    
// }
// chai();
//in {retun} done by explicitly
//in () return done by implicitly
// const sum=(num1,num2)=> (num1+num2);//in ()first bracket does not need back "return" keyword
// console.log(sum(1,11));
// const valReturn=(num1,num2)=> ({username: "Gigi Haid"})//for returning the Object must need here firs() brackets

// console.log(valReturn(4,5));
// const array=[2,3,5,3,5];
// array.forEach(()=>{})

const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
       // console.log(this);
    },
    welcomeMessage2: () => {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    },
    welcomeMessage3: function () {
        console.log(`${user.username} , welcome to website`);
        //console.log(this);
    }
}
//user.welcomeMessage();
//user.welcomeMessage2();
//user.welcomeMessage3();

const user2={
    username: "saiful",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(`${user2.username} , welcome to website`);
        console.log(`${user.username} , welcome to website`);
    }
}
user2.welcomeMessage();