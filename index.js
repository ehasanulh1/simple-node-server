const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple Node Server Running');
});

const users = [
    { id: 1, name: 'Shabana', email: 'shabana@gamil.com' },
    { id: 1, name: 'Shabnor', email: 'shabnor@gamil.com' },
    { id: 1, name: 'Shahnaz', email: 'shahnaz@gamil.com' }
];

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Simple not server running on port ${port}`);
})