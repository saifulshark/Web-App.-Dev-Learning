const dateTime= new Date('12-01-2024');
console.log(dateTime.getUTCMinutes());
// const Date='';
console.log(Date);
console.log(typeof(dateTime));

//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date(2023, 0, 23, 25, 3, 59)
let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time `)


// Create a new Date object
const newDate = new Date();

// Format the date to display the full weekday, day, month, and year
const formattedDate = newDate.toLocaleString('default', {
    weekday: "long",  // Full weekday name
    day: "numeric",   // Day of the month as a number
    month: "long",    // Full month name
    year: "numeric",  // Full year
});

// Print the result
console.log(formattedDate);
