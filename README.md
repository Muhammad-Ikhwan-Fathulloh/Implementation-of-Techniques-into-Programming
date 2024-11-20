# Implementasi Metode Teknik ke dalam Pemrograman

## Metode Struktur Data
### FIFO (First In, First Out)
- Karakteristik:
  - Elemen yang pertama masuk adalah elemen yang pertama keluar.
  - Digunakan dalam struktur data seperti **Queue**.
  - Contoh penerapan: antrean dalam sistem tiket atau buffer data.

### LIFO (Last In, First Out)
- Karakteristik:
  - Elemen yang terakhir masuk adalah elemen yang pertama keluar.
  - Digunakan dalam struktur data seperti **Stack**.
  - Contoh penerapan: fungsi undo/redo pada aplikasi.

### Queue
- Karakteristik:
  - Implementasi FIFO.
  - Mendukung operasi `enqueue` (memasukkan elemen) dan `dequeue` (mengeluarkan elemen).
  - Contoh penerapan: sistem printer, pemrosesan antrian.

### Priority Queue
- Karakteristik:
  - Variasi dari Queue di mana setiap elemen memiliki prioritas tertentu.
  - Elemen dengan prioritas lebih tinggi diproses lebih dulu, meskipun elemen tersebut masuk lebih lambat.
  - Implementasi biasanya menggunakan struktur **Heap** atau **Binary Search Tree**.
  - Mendukung operasi:
    - `insert` (menambahkan elemen dengan prioritas tertentu).
    - `extract-max` atau `extract-min` (menghapus elemen dengan prioritas tertinggi atau terendah).
  - Contoh penerapan: 
    - Sistem antrian rumah sakit (pasien dengan kondisi darurat diprioritaskan).
    - Penjadwalan proses dalam sistem operasi.
    
### Graph
- Karakteristik:
  - Terdiri dari node (vertex) dan edge.
  - Dapat berupa directed (arah) atau undirected (tanpa arah).
  - Contoh penerapan: algoritma pencarian rute, jaringan sosial.

### Tree
- Karakteristik:
  - Struktur hierarki dengan node akar (root) dan cabang (child nodes).
  - Jenis: Binary Tree, Binary Search Tree, AVL Tree, dll.
  - Contoh penerapan: struktur folder, parser sintaksis.

### Lain-lain
- Struktur data lain seperti **Hash Table**, **Linked List**, dan **Heap** juga sering digunakan dalam berbagai aplikasi pemrograman.

---

## Metode Keamanan
### RBAC (Role-Based Access Control)
- Karakteristik:
  - Mengatur akses berdasarkan peran pengguna.
  - Meningkatkan keamanan dengan prinsip **least privilege**.
  - Contoh penerapan: sistem manajemen pengguna di aplikasi web.

### Kriptografi
- Karakteristik:
  - Teknik untuk melindungi data menggunakan algoritma enkripsi.
  - Membantu menjaga kerahasiaan, integritas, dan otentikasi data.
  - Contoh: RSA, AES, MD5.

### Enkripsi dan Dekripsi
- Karakteristik:
  - Enkripsi: mengubah data menjadi format yang tidak dapat dibaca (ciphertext).
  - Dekripsi: mengembalikan ciphertext ke format asli (plaintext).
  - Contoh penerapan: perlindungan komunikasi data pada HTTPS.

### Lain-lain
- Teknik lain seperti **digital signature**, **hashing**, dan **firewall rules** juga diterapkan dalam keamanan.

---

## Metode Pola Desain Pemrograman
### SOLID
- Karakteristik:
  - Prinsip desain yang bertujuan meningkatkan skalabilitas dan pemeliharaan kode.

#### S: Single Responsibility Principle (SRP)
- Setiap kelas atau fungsi hanya memiliki satu tanggung jawab utama.

#### O: Open-Closed Principle (OCP)
- Kode terbuka untuk ekstensi tetapi tertutup untuk modifikasi.

#### L: Liskov Substitution Principle (LSP)
- Objek turunan harus dapat menggantikan objek induk tanpa mengubah fungsi aplikasi.

#### I: Interface Segregation Principle (ISP)
- Antarmuka besar harus dipecah menjadi antarmuka yang lebih spesifik.

#### D: Dependency Inversion Principle (DIP)
- Modul tingkat tinggi tidak boleh bergantung pada modul tingkat rendah.

### Design Repository Service Pattern
- Karakteristik:
  - Memisahkan logika akses data dari logika bisnis.
  - Menggunakan lapisan repository untuk mengelola operasi CRUD.

### Monolith dan Microservice
- Karakteristik:
  - **Monolith**: Aplikasi terintegrasi dalam satu kesatuan.
  - **Microservice**: Aplikasi dibagi menjadi layanan-layanan kecil yang independen.

### Lain-lain
- Pola desain lain seperti **Factory Pattern**, **Observer Pattern**, dan **Builder Pattern** juga digunakan untuk menyelesaikan masalah tertentu.

---

## Metode Numerik
### Rumus Matematika
- Karakteristik:
  - Menggunakan metode numerik untuk menghitung solusi persamaan.
  - Contoh: metode iterasi, interpolasi, atau integral numerik.

### Lain-lain
- Teknik seperti **finite difference**, **metode Euler**, dan **transformasi Fourier** sering diterapkan dalam pemrosesan data numerik.

---

## Metode Kecerdasan Buatan
### Data Science
- Karakteristik:
  - Analisis data menggunakan algoritma statistik dan pembelajaran mesin.
  - Contoh penerapan: prediksi, klasifikasi, dan clustering.

### Computer Vision
- Karakteristik:
  - Menganalisis gambar dan video untuk mengenali objek atau pola.
  - Contoh penerapan: deteksi wajah, OCR.

### Natural Language Processing (NLP)
- Karakteristik:
  - Mengolah dan memahami teks atau suara dalam bahasa manusia.
  - Contoh penerapan: chatbot, analisis sentimen.

### Reinforcement Learning
- Karakteristik:
  - Belajar berdasarkan pemberian penghargaan atau hukuman.
  - Contoh penerapan: robotika, game AI.

### Lain-lain
- Teknik lain seperti **deep learning**, **unsupervised learning**, dan **edge AI** juga digunakan dalam aplikasi AI.

---

## Metode Pentest
### Reconnaissance
- Karakteristik:
  - Mengumpulkan informasi awal tentang target.
  - Contoh: pengindeksan DNS, pencarian subdomain, pengamatan terbuka.

### Scanning and Enumeration
- Karakteristik:
  - Memindai port dan layanan untuk mencari kerentanan.
  - Contoh: penggunaan **Nmap**, **Nessus**, atau **OpenVAS**.

### Exploitation
- Karakteristik:
  - Mengeksploitasi kerentanan untuk mendapatkan akses tidak sah.
  - Contoh: penggunaan framework seperti **Metasploit**.

### Privilege Escalation
- Karakteristik:
  - Meningkatkan hak akses setelah mendapatkan kontrol awal.
  - Contoh: manipulasi konfigurasi atau eksploitasi kerentanan sistem.

### Post-Exploitation
- Karakteristik:
  - Mengamankan akses dan mengumpulkan data lebih lanjut dari sistem.
  - Contoh: pencurian data, persisten akses dengan backdoor.

### Reporting
- Karakteristik:
  - Mendokumentasikan hasil tes dan memberikan rekomendasi keamanan.
  - Contoh: penyusunan laporan detail kerentanan yang ditemukan.

### Lain-lain
- Teknik lain seperti **social engineering**, **phishing simulation**, dan **penetrasi aplikasi web** digunakan sesuai kebutuhan tes.