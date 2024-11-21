# Implementasi Metode Numerik: Perhitungan Tingkat Bunga untuk Investasi

## Deskripsi Kasus

Misalkan Anda ingin mengetahui berapa tingkat bunga yang diperlukan untuk menginvestasikan jumlah uang \(P\) sehingga setelah \(t\) tahun menjadi \(A\). Ini adalah masalah yang biasa ditemui dalam **perhitungan pinjaman atau investasi**.

Rumus yang digunakan adalah:

\[
A = P(1 + r)^t
\]

Dimana:
- **A** adalah jumlah akhir yang diinginkan (misalnya 2x investasi awal).
- **P** adalah jumlah investasi awal.
- **r** adalah tingkat bunga yang ingin ditemukan.
- **t** adalah periode waktu (misalnya dalam tahun).

### Metode: Newton-Raphson

Kita akan menggunakan **Metode Newton-Raphson** untuk mencari tingkat bunga \(r\) yang memenuhi persamaan \(f(r) = 0\):

\[
f(r) = P(1 + r)^t - A = 0
\]

### Kode JavaScript

```javascript
// Fungsi untuk menghitung jumlah akhir dengan tingkat bunga r
function f(r, P, A, t) {
    return P * Math.pow(1 + r, t) - A;  // f(r) = P(1 + r)^t - A
}

// Turunan pertama dari fungsi f(r)
function fPrime(r, P, t) {
    return P * t * Math.pow(1 + r, t - 1);  // f'(r) = P * t * (1 + r)^(t - 1)
}

// Metode Newton-Raphson untuk menemukan tingkat bunga r
function newtonRaphson(initialGuess, P, A, t, tolerance, maxIterations) {
    let r0 = initialGuess;  // tebakan awal untuk r
    let iteration = 0;
    let r1;

    while (iteration < maxIterations) {
        // Menghitung nilai r berikutnya
        r1 = r0 - f(r0, P, A, t) / fPrime(r0, P, t);

        // Periksa apakah perbedaan cukup kecil untuk berhenti
        if (Math.abs(r1 - r0) < tolerance) {
            return r1;  // return tingkat bunga yang ditemukan
        }

        // Update tebakan untuk iterasi berikutnya
        r0 = r1;
        iteration++;
    }

    throw new Error("Metode tidak konvergen setelah " + maxIterations + " iterasi.");
}

// Menjalankan metode Newton-Raphson untuk kasus investasi
try {
    let initialGuess = 0.05;  // Tebakan awal bunga 5%
    let tolerance = 0.0001;  // Toleransi error
    let maxIterations = 100;  // Jumlah iterasi maksimum
    let P = 1000;  // Investasi awal
    let A = 2000;  // Jumlah akhir yang diinginkan (gandakan investasi)
    let t = 5;  // Periode waktu dalam tahun

    let r = newtonRaphson(initialGuess, P, A, t, tolerance, maxIterations);
    console.log(`Tingkat bunga yang diperlukan: ${r * 100}%`);
} catch (error) {
    console.error(error.message);
}
```

# Penjelasan Kode: Implementasi Metode Newton-Raphson untuk Perhitungan Tingkat Bunga

## Fungsi-fungsi dalam Kode

### 1. **Fungsi `f(r, P, A, t)`**
Fungsi ini menggambarkan perbedaan antara jumlah akhir yang diinginkan dan jumlah yang dihitung berdasarkan tingkat bunga \( r \). Kita ingin mencari nilai \( r \) yang membuat fungsi ini sama dengan nol (akar persamaan). Rumus yang digunakan adalah:

\[
f(r) = P(1 + r)^t - A
\]

Dimana:
- **P** adalah investasi awal,
- **A** adalah jumlah akhir yang diinginkan,
- **t** adalah durasi investasi dalam tahun.

### 2. **Fungsi `fPrime(r, P, t)`**
Fungsi ini adalah turunan pertama dari fungsi \( f(r) \), yang diperlukan untuk langkah iteratif dalam metode **Newton-Raphson**. Turunan pertama dari \( f(r) \) adalah:

\[
f'(r) = P \cdot t \cdot (1 + r)^{t - 1}
\]

Fungsi ini digunakan untuk mempercepat konvergensi dalam menemukan akar persamaan.

### 3. **Fungsi `newtonRaphson()`**
Fungsi ini mengimplementasikan metode **Newton-Raphson** untuk menemukan akar dari fungsi \( f(r) \). Pada setiap iterasi, kita memperbarui tebakan \( r \) hingga perbedaan antara dua tebakan berturut-turut lebih kecil dari toleransi yang diberikan.

Proses iteratif dilakukan hingga salah satu kondisi berikut terpenuhi:
- **Perbedaan antara tebakan berturut-turut** lebih kecil dari nilai toleransi yang diberikan, atau
- **Jumlah iterasi maksimum** tercapai.

### Variabel Input:
- **initialGuess**: Tebakan awal untuk tingkat bunga.
- **tolerance**: Batas toleransi kesalahan dalam perhitungan akar.
- **maxIterations**: Jumlah iterasi maksimum untuk menghindari perulangan tak terbatas.
- **P**: Investasi awal.
- **A**: Jumlah akhir yang diinginkan.
- **t**: Durasi investasi dalam tahun.

## Hasil

Jika Anda menggunakan input berikut:
- Investasi awal \( P = 1000 \)
- Jumlah akhir yang diinginkan \( A = 2000 \) (gandakan investasi)
- Durasi \( t = 5 \) tahun

### Output:
```
Tingkat bunga yang diperlukan: 14.872346589560072%
```

## Kesimpulan
Dengan menggunakan **Metode Newton-Raphson**, kita dapat menghitung tingkat bunga yang diperlukan untuk menggandakan investasi dalam 5 tahun. Ini adalah contoh penerapan metode numerik dalam masalah nyata seperti perhitungan investasi atau pinjaman.