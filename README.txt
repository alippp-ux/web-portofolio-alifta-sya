ALIFTA — BLUE GLASS PORTFOLIO
=============================

CARA MEMBUKA DI VISUAL STUDIO CODE
1. Ekstrak file ZIP ini terlebih dahulu.
2. Buka Visual Studio Code.
3. Pilih File > Open Folder...
4. Pilih folder "alifta_blue_glass_portfolio" hasil ekstrak.
5. Buka file index.html.
6. Cara termudah: pasang extension "Live Server" dari tab Extensions di VS Code.
7. Setelah terpasang, klik kanan index.html > Open with Live Server.
   Website akan terbuka di browser. Jika tidak ingin memasang extension,
   kamu juga bisa klik dua kali file index.html dari File Explorer.

STRUKTUR FOLDER
- index.html             Halaman utama
- what-can-i-do.html     Halaman skill, tools, dan currently learning
- fun-facts.html         Halaman fun facts
- a-little-more.html     Halaman hobi dan suasana belajar
- css/style.css          Semua styling dan responsive layout
- js/main.js             Interaksi tombol dan navigasi

BAGIAN YANG PERLU KAMU UBAH
1. FOTO PROFIL:
   Pada index.html, cari bagian "YOUR PHOTO HERE". Untuk menggunakan foto:
   - Buat folder images di folder utama.
   - Simpan foto dengan nama profile.jpg.
   - Ganti blok <div class="portrait-placeholder">...</div> di hero
     menjadi:
     <img class="profile-photo" src="images/profile.jpg" alt="Foto Alifta">
   - Tambahkan CSS berikut ke bagian paling bawah style.css:
     .profile-photo {
       width: 100%;
       height: 100%;
       object-fit: cover;
       border-radius: inherit;
     }

2. FOTO FAVORIT:
   Cari bagian "Tambahkan foto favoritmu di sini" di index.html.
   Kamu bisa menggantinya dengan foto atau ilustrasi sendiri.

3. KONTAK:
   Di bagian Contact pada index.html, ganti:
   - your.email@example.com dengan email yang ingin kamu tampilkan.
   - 62XXXXXXXXXX dengan nomor WhatsApp format internasional tanpa tanda +,
     spasi, atau tanda hubung. Contoh format Indonesia: 62812xxxxxxx.
   - Ganti link LinkedIn dengan URL profilmu sendiri jika sudah siap.

4. RANDOM MESSAGE:
   Buka js/main.js, lalu edit isi array randomMessages. Setiap pesan harus
   ditulis di antara tanda kutip dan dipisahkan dengan koma.

5. NAMA / TEKS:
   Cari teks di file HTML lalu ubah sesuai kebutuhan.

CATATAN
- Tombol Say Hi, Random Message, menu mobile, dan tema gelap/terang sudah aktif.
- Tombol Leave Some Love menghitung klik selama halaman masih terbuka.
  Angka akan kembali ke 0 ketika halaman dimuat ulang. Agar jumlahnya tersimpan
  untuk semua pengunjung, perlu backend atau database.
- Form pesan belum dibuat karena versi ini menggunakan tombol Leave Some Love
  sederhana, sesuai konsep yang sudah kita sepakati.
- Google Fonts membutuhkan koneksi internet; bila offline, website tetap
  terbuka dengan font cadangan.
- Ini merupakan website statis. Untuk membagikan ke publik, kamu bisa
  mengunggahnya ke GitHub Pages, Netlify, atau layanan hosting statis lain.
