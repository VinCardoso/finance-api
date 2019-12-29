const router = require('express').Router();
const Account = require('../model/Account');
const verify = require('./verifyToken');
const { accountValidation } = require('../validation');

router.post('/new', verify, async (req, res) => {

  // Validation
  const { error } = accountValidation(req.body);
  if ( error ) return res.status(400).send(error.details[0].message);
  
  // Create new Transaction
  const account = new Account({
    userId: req.body.userId,
    name: req.body.name,
    type: req.body.type,
    description: req.body.descripition
  });
  try {
      const savedAccount = await account.save();
      res.send({ id: account._id });
  } catch (err) {
      res.status(400).send(err);
  }
});

module.exports = router;