class Queue {
    constructor() {
        this.items = [];
    }

    // Menambahkan elemen ke dalam antrian
    enqueue(element) {
        this.items.push(element);
    }

    // Menghapus elemen dari antrian
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Melihat elemen pertama dalam antrian
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Mengecek apakah antrian kosong
    isEmpty() {
        return this.items.length === 0;
    }
}

// Contoh Penggunaan
const queue = new Queue();
queue.enqueue("Tiket A");
queue.enqueue("Tiket B");
console.log(queue.dequeue()); // Output: "Tiket A"