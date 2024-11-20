class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Menambahkan simpul
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Menambahkan edge
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // Untuk undirected graph
        }
    }

    // Melihat adjacency list
    display() {
        console.log(this.adjacencyList);
    }
}

// Contoh Penggunaan
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
graph.display(); // Output: { A: [ 'B' ], B: [ 'A' ] }