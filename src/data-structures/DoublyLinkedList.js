import Node from "../nodes/doublyLinkedList_node.js";

class DoublyLinkedList {
	head = null;
	tail = null;
	length = 0;

	push(value) {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
		}

		this.tail = node;

		this.length++;

		return this;
	}

	pop() {
		if (!this.head) return "List is empty.";

		let poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}

		this.length--;
		console.log(poppedNode);

		return poppedNode.value;
	}
}

const list = new DoublyLinkedList();
list.push(4);
list.push(5);
list.push(6);
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list);
