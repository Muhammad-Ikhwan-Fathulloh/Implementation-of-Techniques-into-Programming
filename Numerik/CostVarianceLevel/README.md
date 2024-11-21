# Penjelasan Kode: Menghitung Beban Pekerjaan Menggunakan % CVL (Cost Variance Level)

## Deskripsi Kasus
Dalam manajemen proyek, salah satu cara untuk mengukur kinerja proyek adalah dengan menghitung **Cost Variance Level (CVL)**, yang dapat digunakan untuk mengetahui apakah proyek lebih mahal atau lebih murah dari anggaran yang telah ditetapkan. **% CVL** digunakan untuk menunjukkan proporsi biaya yang sudah dikeluarkan dibandingkan dengan anggaran yang direncanakan.

### Rumus % CVL
Untuk menghitung **% CVL**, kita bisa menggunakan rumus berikut:

\[
\text{CVL} = \frac{\text{BCWP} - \text{BCWS}}{\text{BCWS}} \times 100
\]

Dimana:
- **BCWP (Budgeted Cost of Work Performed)**: Biaya yang sudah dikeluarkan berdasarkan pekerjaan yang sudah dilakukan.
- **BCWS (Budgeted Cost of Work Scheduled)**: Biaya yang telah direncanakan untuk pekerjaan yang dijadwalkan.

### Tujuan
Dengan menggunakan rumus di atas, kita dapat menentukan apakah biaya yang dikeluarkan untuk pekerjaan proyek lebih banyak atau lebih sedikit dibandingkan dengan anggaran yang ditetapkan. **% CVL** memberikan indikasi yang jelas apakah proyek membutuhkan pengeluaran tambahan atau apakah bisa menyelesaikan pekerjaan dengan biaya lebih rendah.

## Implementasi di JavaScript

```javascript
// Fungsi untuk menghitung Cost Variance Level (% CVL)
function calculateCVL(BCWP, BCWS) {
    if (BCWS === 0) {
        throw new Error("BCWS tidak boleh nol");
    }

    const CVL = ((BCWP - BCWS) / BCWS) * 100;
    return CVL;
}

// Contoh Input
const BCWP = 15000; // Biaya yang sudah dikeluarkan berdasarkan pekerjaan yang sudah dilakukan
const BCWS = 20000; // Biaya yang direncanakan untuk pekerjaan yang dijadwalkan

// Menghitung % CVL
const CVLPercentage = calculateCVL(BCWP, BCWS);

console.log("Persentase CVL: " + CVLPercentage.toFixed(2) + "%");

// Output:
// Persentase CVL: -25.00%
// Artinya proyek berada dalam defisit anggaran sebesar 25%
```

# Penjelasan Kode: Menghitung Beban Pekerjaan Menggunakan % CVL (Cost Variance Level)

## Fungsi `calculateCVL(BCWP, BCWS)`

Fungsi ini menerima dua parameter: **BCWP** dan **BCWS**.

Fungsi ini menghitung selisih antara **BCWP** (Biaya yang telah dikeluarkan) dan **BCWS** (Biaya yang direncanakan) dan mengembalikan hasilnya dalam bentuk persentase.

### Contoh Input:
- **BCWP = 15000**: Biaya yang telah dikeluarkan berdasarkan pekerjaan yang sudah dilakukan.
- **BCWS = 20000**: Biaya yang direncanakan untuk pekerjaan yang dijadwalkan.

### Output:
Dalam contoh ini, persentase **CVL** dihitung menjadi **-25.00%**, yang berarti proyek berada dalam defisit anggaran sebesar 25%. Artinya, biaya yang sudah dikeluarkan lebih rendah dari anggaran yang direncanakan.

## Hasil dan Interpretasi
- Jika **% CVL** positif, maka proyek menghabiskan biaya lebih banyak dari yang direncanakan (overbudget).
- Jika **% CVL** negatif, maka proyek menghabiskan biaya lebih sedikit dari yang direncanakan (underbudget).
- **% CVL = 0** berarti proyek sedang berjalan sesuai anggaran.

## Kesimpulan
Dengan menggunakan metode **% CVL**, manajer proyek dapat memantau apakah pengeluaran proyek sesuai dengan anggaran yang telah ditetapkan atau jika ada kebutuhan untuk menyesuaikan strategi keuangan agar proyek tetap berada dalam batas biaya yang wajar.