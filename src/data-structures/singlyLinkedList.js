import Node from "../nodes/singly_node";

class SinglyLinkedList {
	head = null;
	tail = null;
	length = 0;

	push(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
		}
		this.tail = newNode;
		this.length++;
		return this;
	}

	traverse() {
		let currentNode = this.head;
		if (!currentNode) return;

		while (currentNode) {
			console.log(currentNode.value);
			currentNode = currentNode.next;
		}
	}

	pop() {
		let current = this.head;
		if (!current) return undefined;

		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		newTail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current.value;
	}

	unShift(value) {
		const newHead = new Node(value);
		if (!this.head) {
			this.head = newHead;
			this.tail = newHead;
		} else {
			newHead.next = this.head;
			this.head = newHead;
		}

		this.length++;
		return this;
	}

	shift() {
		if (!this.head) return undefined;
		let temp = this.head;
		this.head = this.head.next;
		this.length--;

		if (!this.length) this.tail = null;
		return temp.value;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let temp = this.head;
		let current = 0;

		while (current !== index) {
			temp = temp.next;
			current++;
		}
		return temp;
	}

	// first method set
	set(index, value) {
		if (index < 0 || index >= this.length) return false;

		let temp = this.head;
		let counter = 0;

		while (counter !== index) {
			temp = temp.next;
			counter++;
		}

		temp.value = value;
		return true;
	}

	// second method set
	set(index, value) {
		let node = this.get(index);
		if (node) {
			node.value = value;
			return true;
		}
		return false;
	}

	insert(value, index) {
		if (index < 0 || index > this.length) return false;

		if (index === 0) {
			this.unShift(value);
			return true;
		}

		if (index === this.length) {
			this.push(value);
			return true;
		}

		const newNode = new Node(value);

		const preIndexNode = this.get(index - 1);

		newNode.next = preIndexNode.next;
		preIndexNode.next = newNode;

		this.length++;
		return true;
	}
}

const list = new SinglyLinkedList();

list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
// console.log(list);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// list.unShift("hi");
// list.unShift("bye");
// console.log(list.unShift("!"));
console.log(list.get(4));
console.log(list.set(6, 300000));
console.log(list.insert("aaassssssssss", 9));
console.log(list);
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list);
// console.dir(list, { depth: null });

// const node = new Node("1");
// node.next = new Node("2");
// node.next.next = new Node("3");
// node.next.next.next = new Node("4");

// console.log(node);
