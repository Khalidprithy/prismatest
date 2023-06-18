require('dotenv').config();
const express = require('express');
const usersRouter = require('./routes/users');
const settingsRouter = require('./routes/settings');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Mount user routes
app.use('/users', usersRouter);
app.use('/setting', settingsRouter);
// app.use('/settings', settingsRouter);


// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the turbo app!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
