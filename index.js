const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    console.log(req)
    res.send('Simple Node Server Running');
});

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Shabana', email: 'shabana@gamil.com' },
    { id: 2, name: 'Shabnor', email: 'shabnor@gamil.com' },
    { id: 3, name: 'Shahnaz', email: 'shahnaz@gamil.com' }
];

// username: dbUser1
// password: C1vc8e2UsKpZPA7I

const uri = "mongodb+srv://dbUser1:C1vc8e2UsKpZPA7I@cluster0.z6gep9m.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("simpleNode").collection("users");
    // perform actions on the collection object
    console.log('database connected');
    client.close();
});



app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    console.log('Post API called');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user)
    res.send(user);
})

app.listen(port, () => {
    console.log(`Simple not server running on port ${port}`);
})