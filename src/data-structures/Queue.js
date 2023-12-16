import Node from "../nodes/Node";

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // 1-> 2-> 3-> 4-> 5->
    enqueue(value) {
        let newNode = new Node(value);

        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.size) return null;

        if (this.size === 1) this.last = null;

        let removedNode = this.first;
        this.first = removedNode.next;
        removedNode.next = null;

        this.size--;

        return removedNode;
    }
}

let q = new Queue();
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.enqueue(4));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

console.log(q);