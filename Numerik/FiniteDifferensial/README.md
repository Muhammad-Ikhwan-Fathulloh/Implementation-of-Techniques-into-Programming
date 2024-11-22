# Simulasi Pertumbuhan Populasi dengan Metode Finite Difference

Pada simulasi ini, kita menggunakan **Metode Finite Difference** untuk mensimulasikan pertumbuhan populasi menggunakan persamaan diferensial:

\[
\frac{dP}{dt} = rP
\]

Dimana:
- \( P(t) \) adalah populasi pada waktu \( t \).
- \( r \) adalah laju pertumbuhan populasi.

## Langkah-langkah Implementasi

### 1. Metode Finite Difference

Metode yang digunakan dalam simulasi ini adalah **Euler Method**. Metode ini mengapproximate perubahan nilai fungsi pada setiap langkah waktu berdasarkan rumus berikut:

\[
P_{n+1} = P_n + r \cdot P_n
\]

Dimana:
- \( P_n \) adalah nilai populasi pada waktu \( t_n \).
- \( r \) adalah laju pertumbuhan populasi.
- \( P_{n+1} \) adalah nilai populasi pada langkah waktu berikutnya.

Rumus ini digunakan untuk menghitung populasi pada setiap langkah waktu \( t \).

### 2. Variabel Input
Simulasi ini memerlukan input berikut:
- **Laju Pertumbuhan (r)**: Ini adalah angka yang menggambarkan seberapa cepat populasi tumbuh pada setiap periode waktu.
- **Populasi Awal (P0)**: Jumlah populasi pada waktu \( t=0 \).
- **Jumlah Langkah Waktu**: Banyaknya langkah waktu yang akan dihitung dalam simulasi.

### 3. Proses Simulasi

Proses simulasi dimulai dengan nilai populasi awal, dan pada setiap langkah waktu, populasi dihitung dengan rumus Euler Method:

1. Mulai dengan populasi awal \( P_0 \).
2. Pada setiap langkah \( t_n \), hitung populasi pada langkah berikutnya \( P_{n+1} \) menggunakan rumus \( P_{n+1} = P_n + r \cdot P_n \).
3. Lanjutkan perhitungan hingga mencapai jumlah langkah waktu yang diinginkan.

### 4. Menampilkan Hasil Simulasi

Setelah perhitungan dilakukan, hasil simulasi akan ditampilkan dalam bentuk tabel yang berisi dua kolom:
- **Waktu (t)**: Representasi waktu pada setiap langkah.
- **Populasi (P)**: Populasi pada waktu tersebut.

### 5. Penggunaan Simulasi

Simulasi ini memungkinkan pengguna untuk mengubah parameter berikut:
- **Laju Pertumbuhan (r)**: Nilai laju pertumbuhan populasi.
- **Populasi Awal (P0)**: Jumlah populasi pada waktu t=0.
- **Jumlah Langkah Waktu**: Jumlah langkah waktu yang ingin dihitung.

Setelah input dimasukkan, tombol **Mulai Simulasi** akan menjalankan perhitungan dan hasilnya akan ditampilkan dalam bentuk tabel, yang menunjukkan perubahan populasi dari waktu ke waktu.

### 6. Hasil Simulasi

Jika kita menggunakan contoh berikut:
- **Laju Pertumbuhan (r)** = 0.1
- **Populasi Awal (P0)** = 100
- **Jumlah Langkah Waktu** = 50

Hasil simulasi mungkin akan terlihat seperti ini:

| Waktu (t) | Populasi (P) |
|-----------|--------------|
| 0.00      | 100.0000     |
| 1.00      | 110.0000     |
| 2.00      | 121.0000     |
| 3.00      | 133.1000     |
| ...       | ...          |

Dengan simulasi ini, kita bisa mengamati bagaimana populasi berubah seiring berjalannya waktu berdasarkan laju pertumbuhannya.

---

## Kesimpulan

Simulasi pertumbuhan populasi menggunakan metode **Finite Difference** ini memberikan gambaran yang jelas tentang bagaimana metode numerik dapat digunakan untuk mengapproximate solusi dari persamaan diferensial. Pengguna dapat menyesuaikan parameter seperti laju pertumbuhan dan populasi awal untuk melihat dampaknya terhadap hasil simulasi.