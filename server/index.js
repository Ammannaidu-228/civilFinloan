const express = require('express');
const connectToDatabase = require('./utils/dbConnection');
const port = 3000 || process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    connectToDatabase();
});