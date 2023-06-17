require('dotenv').config();
const express = require('express');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Mount user routes
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
