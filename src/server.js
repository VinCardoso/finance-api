const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Router
const authRoute = require('./routes/auth');
const transactionRoute = require('./routes/transaction');
const accountRoute = require('./routes/account');

// Setup DotEnv
dotenv.config();

// Enable Cors
app.use(cors());

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

// Server Up
app.listen(3000, () => console.log('ServerUP!'));