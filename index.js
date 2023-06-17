require('dotenv').config();
const express = require('express');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Mount user routes
app.use('/users', usersRouter);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js with Prisma and MongoDB app!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
