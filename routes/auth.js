const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');

// Create new User
router.post('/register', async (req, res) => {

    // Validation
    const { error } = registerValidation(req.body);
    if ( error ) return res.status(400).send(error.details[0].message);

    // Check if email already exists
    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send('Email already exists');

    // Hash de password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Creat New User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

// Login
router.post('/login', async (req, res) =>{

     // Validation
     const { error } = loginValidation(req.body);
     if ( error ) return res.status(400).send(error.details[0].message);

     // Check if email already exists
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Email - Email or password is wrong!');

    // If Password is Correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Password - Email or password is wrong!');

    // Create and assign a token
    const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

})

module.exports = router;