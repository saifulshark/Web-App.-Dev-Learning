let people = [
    { firstName: "John", lastName: "Doe", gender: "male" },
    { firstName: "Jane", lastName: "Smith", gender: "female" },
    { firstName: "Michael", lastName: "Brown", gender: "male" },
    { firstName: "Emily", lastName: "Davis", gender: "female" },
    { firstName: "John", lastName: "Doe", gender: "male" },
    { firstName: "Jane", lastName: "Smith", gender: "female" },
    { firstName: "Michael", lastName: "Brown", gender: "male" },
    { firstName: "Emily", lastName: "Davis", gender: "female" },
    { firstName: "Saiful", lastName: "Islam", gender: "male" }
];

for (let i = 0; i < people.length; i++) {
    if (people[i].gender === "male") {
        console.log(people[i].firstName);
    }
}
