const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Router
const authRoute = require('./routes/auth');
const transactionRoute = require('./routes/transaction');
const accountRoute = require('./routes/account');

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
app.use('/api/transaction', transactionRoute);
app.use('/api/account', accountRoute);

// 
app.listen(3000, () => console.log('ServerUP!'));