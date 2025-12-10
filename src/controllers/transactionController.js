const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' } 
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const { amount, description, categoryId } = req.body;
    const struk = req.file ? req.file.filename : null;

    const newTrans = await prisma.transaction.create({
      data: {
        amount: parseFloat(amount),
        description,
        categoryId: parseInt(categoryId),
        receiptImage: struk 
      }
    });

    res.status(201).json({ message: "Berhasil disimpan", data: newTrans });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const trans = await prisma.transaction.findUnique({ where: { id: parseInt(id) } });
    if (!trans) return res.status(404).json({ msg: "Data tidak ditemukan" });

    if (trans.receiptImage) {
      const filePath = path.join(__dirname, '../../uploads', trans.receiptImage);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await prisma.transaction.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};