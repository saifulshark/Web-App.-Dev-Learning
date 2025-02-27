class User{
    static count = 0;
    constructor(name){
        this.name = name;
        User.count++;
    }
    sayHi(){
        console.log(`Hello! What about you ${this.name} ?`);
    }
    static showCount(){
        console.log(`Total user is ${User.count} online now`);
    }
}
const user1 = new User('Tom');
const user2 = new User('Bob');
const user3 = new User('Sam');
const user4 = new User('Saifulireland');

user1.sayHi();
user2.sayHi();
user4.sayHi();

User.showCount(); // 4

