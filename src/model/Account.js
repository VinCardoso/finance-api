const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    type: {
        type: String,
    },
    description: {
        type: String,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

// Exemple register
var exemple = {
    "userId" : "5e075272d22ce63a3e9f49df",
    "name" : "Nubank - Crédito",
    "type" : "Cartão de Crédito",
    "description" : "Minha conta do Nubank do Cartão de Crédito final 45"
}

module.exports = mongoose.model('Acctoun', accountSchema);