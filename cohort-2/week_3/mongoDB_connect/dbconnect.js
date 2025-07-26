const { MongoClient } = require('mongodb');//By this-{}, installing mongodb class.

// Direct connection string with username and password
const url = 'mongodb+srv://mrx:JByoERjrLbSVNpmP@cluster0.klreadp.mongodb.net/myDatabase?retryWrites=true&w=majority';//from mongoDB Atlas url.
const dbName = 'myDatabase';// Database name

const client = new MongoClient(url);

async function connectToDatabase() {
    try {
        await client.connect();// Connect to the MongoDB server
        console.log('✅ Connected to MongoDB Atlas');

        const db = client.db(dbName);// Get the database instance
        const usersCollection = db.collection('users');// Get the 'users' collection -> table.

        const sampleUser = {
            name: 'Mitchell Johnson',
            email: 'jonson@example.com',
            age: 24,
            address: {
                street: '123 Main St',
                city: 'San Francisco',
                state: 'CA',
                zipCode: '94101'
            },
            hobbies: ['reasoning', 'travelling', 'coding','problem solving'],
            createdAt: new Date()
        };

        const result = await usersCollection.insertOne(sampleUser);//directly insert the sample user into the collection
        console.log(`✅ User inserted with ID: ${result.insertedId}`);

        const foundUser = await usersCollection.findOne({ name: 'Mitchell Johnson' });// Find the user we just inserted
        console.log('📦 Found user:', foundUser);

        return '✅ MongoDB operations completed';
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
    } finally {
        await client.close();
        console.log('🔒 Connection closed');
    }
}

connectToDatabase()
    .then(console.log)// Log the success message
    .catch(console.error);// Log any errors that occur during the connection or operations.
