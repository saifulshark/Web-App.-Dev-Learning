const mongoose= require('mongoose');

const db = mongoose.connect('mongodb+srv://mrx:JByoERjrLbSVNpmP@cluster0.klreadp.mongodb.net/myDatabase?retryWrites=true&w=majority');

const model= mongoose.model('login', {username: String, email: String, password: String})//model schema is defined here.

const user = new model({//creating a new user instance based on the model schema.
    username: 'Stephen Hawkings',
    email: 'einstein@gmail.com',
    password: '7801'
});
user.save()
    .then(() => console.log('It is an event of Joy! that your effort is sucessful'))// message to be printed on successful save of user.
    .catch(err => console.error('Error saving user:', err));// failure message to be printed on unsuccessful save of user.