class Stack {
    constructor() {
        this.items = [];
    }

    // Menambahkan elemen ke dalam stack
    push(element) {
        this.items.push(element);
    }

    // Menghapus elemen dari stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Melihat elemen di puncak stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Mengecek apakah stack kosong
    isEmpty() {
        return this.items.length === 0;
    }
}

// Contoh Penggunaan
const stack = new Stack();
stack.push("Undo A");
stack.push("Undo B");
console.log(stack.pop()); // Output: "Undo B"