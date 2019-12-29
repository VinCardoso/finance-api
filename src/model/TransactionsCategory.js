const mongoose = require('mongoose');

const transactionCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('TransactionCategory', transactionCategorySchema );