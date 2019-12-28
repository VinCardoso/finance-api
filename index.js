const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Router
const authRoute = require('./routes/auth');
const transactionsRoute = require('./routes/transactions');

// Setup DotEnv
dotenv.config();

// Connect to MongoDB
mongoose.connect(
    process.env.DB_CONNECT,
    { keepAlive: 1, useUnifiedTopology: true, useNewUrlParser: true, },
    () => console.log('MongoDB Coneected.')
);

// Middlawares
app.use(express.json());

// Route Meddlewares
app.use('/api/user', authRoute);
app.use('/api/transactions', transactionsRoute);

// 
app.listen(3000, () => console.log('ServerUP!'));