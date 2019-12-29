const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    accountId: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String
    },
    categoryId: {
        type: String,
    },
    dateRegitred: {
        type: Date,
        default: Date.now
    },
    
});

// Exemple register
var exemple = {
    "accountId" : "5e0889e4ffb93a4391d7232d",
    "value" : 12.76,
    "date" : "2019-12-28T16:00:00Z",
    "description" : "Viagem Uber",
    "categoryId" : ""
}

module.exports = mongoose.model('Transaction', transactionSchema);