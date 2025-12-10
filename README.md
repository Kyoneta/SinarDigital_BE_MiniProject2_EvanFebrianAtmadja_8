# Mini Project 2 - Finance Tracker Backend

Aplikasi backend (REST API) sederhana untuk mencatat transaksi keuangan (Pengeluaran & Pemasukan) dengan fitur upload bukti struk pembayaran. Proyek ini dibuat menggunakan Node.js, Express, dan MySQL dengan Prisma ORM.

**Nama:** Evan Febrian Atmadja
**Kelas:** Kelompok 8
**Tech Stack:** Node.js, Express, Prisma ORM, MySQL, Multer.

---

## 🛠️ Prasyarat (Requirement)
Sebelum menjalankan aplikasi, pastikan di komputer sudah terinstall:
1.  **Node.js** (v14 ke atas).
2.  **XAMPP / Laragon** (Pastikan MySQL sudah dalam kondisi Running/Hijau).
3.  **Postman** atau **Thunder Client** (Untuk melakukan testing API).

---

## 🚀 Cara Menjalankan Project (Installation Guide)

Ikuti langkah-langkah berikut secara berurutan agar aplikasi berjalan lancar:

### 1. Clone Repository & Install Dependencies
Buka terminal dan jalankan perintah berikut:
```bash
git clone <PASTE_LINK_GITHUB_KAMU_DISINI>
cd <NAMA_FOLDER_PROJECT>
npm install

### 2. Konfigurasi Environment (.env)
Ganti user:password jika perlu. Default XAMPP biasanya root tanpa password
DATABASE_URL="mysql://root:@127.0.0.1:3306/db_tabungan_target"
PORT=3000

### 3. Setup Database (Prisma)
1. Membuat Tabel (Migrasi)
npx prisma migrate dev --name init

2. Mengisi Data Dummy (Seeding)
node prisma/seed.js

### 4. Jalankan Server
npx nodemon server.js

git clone <PASTE_LINK_GITHUB_KAMU_DISINI>
cd <NAMA_FOLDER_PROJECT>
npm install
