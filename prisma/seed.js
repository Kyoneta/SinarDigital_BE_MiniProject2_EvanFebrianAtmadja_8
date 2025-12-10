const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const cat1 = await prisma.category.create({ data: { name: 'Makan', type: 'EXPENSE' } });
  const cat2 = await prisma.category.create({ data: { name: 'Transport', type: 'EXPENSE' } });
  const cat3 = await prisma.category.create({ data: { name: 'Gaji', type: 'INCOME' } });

  for (let i = 1; i <= 10; i++) {
    await prisma.transaction.create({
      data: {
        amount: i * 50000,
        description: `Contoh Transaksi ${i}`,
        categoryId: i % 2 === 0 ? cat1.id : cat3.id,
        receiptImage: null
      }
    });
  }
  console.log('Database berhasil diisi data dummy!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());