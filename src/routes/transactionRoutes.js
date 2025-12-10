const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const upload = require('../config/multer'); // Middleware upload

router.get('/', transactionController.getAllTransactions);

router.post('/', upload.single('struk'), transactionController.createTransaction);

router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;