const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const transactionRoutes = require('./src/routes/transactionRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Tabungan berjalan di http://localhost:${PORT}`);
});