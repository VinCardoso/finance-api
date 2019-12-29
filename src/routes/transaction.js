const router = require('express').Router();
const Transaction = require('../model/Transaction');
const verify = require('./verifyToken');
const { transactionValidation } = require('../validation');

// Register new Transaction
router.post('/new', verify, async (req, res) => {

  // Validation
  const { error } = transactionValidation(req.body);
  if ( error ) return res.status(400).send(error.details[0].message);
  
  // Create new Transaction
    const transaction = new Transaction({
      accountId: req.body.accountId,
      value: req.body.value,
      date: req.body.date,
      description: req.body.value,
      categoryId: req.body.categoryId
  });
  try {
      const savedTransaction = await transaction.save();
      res.send({ id: transaction._id });
  } catch (err) {
      res.status(400).send(err);
  }
});

// Lista all Transactions
router.get('/list', verify, async (req, res)=> {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
      res.json({ messege: err });
  }
})

module.exports = router;