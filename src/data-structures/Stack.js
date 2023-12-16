import Node from "../nodes/Node";

// we should push and pop from the last of the linked list
// but it will cost time so we push and pop from the first 
// of the list to get the adv of the linked list 

// LIFO: last in first out

export class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // <-1 <-2 <-3 (<-4)
    push(value) {
        let newNode = new Node(value);

        if (!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        return ++this.size;
    }

    // <-1 <-2 <-3 <-4
    pop() {
        if (!this.first) return null;

        let oldFirst = this.first;
        this.first = oldFirst.next;
        oldFirst.next = null;

        if (this.size === 1) this.last = null;

        this.size--;

        return oldFirst;
    }
}

// let stack = new Stack();
// console.log(stack.push(6));
// console.log(stack.push(5));
// console.log(stack.push(4));
// console.log(stack.push(3));
// console.log(stack.push(2));
// console.log(stack.push(1));
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack);