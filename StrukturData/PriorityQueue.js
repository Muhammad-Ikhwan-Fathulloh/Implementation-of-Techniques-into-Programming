class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Menambahkan elemen dengan prioritas
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        // Menyisipkan elemen berdasarkan prioritas
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        // Jika prioritas tidak ditemukan, tambahkan di akhir
        if (!added) {
            this.items.push(queueElement);
        }
    }

    // Menghapus elemen dengan prioritas tertinggi
    dequeue() {
        if (this.isEmpty()) {
            return "Priority Queue is empty";
        }
        return this.items.shift();
    }

    // Mengecek apakah antrian kosong
    isEmpty() {
        return this.items.length === 0;
    }
}

// Contoh Penggunaan
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Pasien Darurat", 1); // Prioritas tinggi
priorityQueue.enqueue("Pasien Umum", 5);   // Prioritas rendah
console.log(priorityQueue.dequeue());      // Output: { element: "Pasien Darurat", priority: 1 }