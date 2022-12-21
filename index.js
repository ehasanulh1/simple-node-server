const express = require('express');
const cors = require('cors');
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