const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

// Login Validation
const loginValidation = data => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

// New Transaction Validation
const transactionValidation = data => {
    const schema = Joi.object({
        accountId: Joi.string().required(),
        value: Joi.number().required(),
        date: Joi.date().required(),
        description: Joi.string(),
        categoryId: Joi.string()
    });
    return schema.validate(data);
}

// New Accout Validation
const accountValidation = data => {
    const schema = Joi.object({
        userId: Joi.string().required(),
        name: Joi.string().required(),
        type: Joi.string(),
        description: Joi.string()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.transactionValidation = transactionValidation;
module.exports.accountValidation = accountValidation;