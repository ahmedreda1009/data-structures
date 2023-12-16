import Node from "../nodes/doublyLinkedList_node.js";

class DoublyLinkedList {
	head = null;
	tail = null;
	length = 0;

	push(value) {
		// creating a new node to push it
		const node = new Node(value);

		// if we insert the first node
		if (!this.head) {
			this.head = node;
			// if we insert the 2nd or more
		} else {
			this.tail.next = node;
			node.prev = this.tail;
		}

		this.tail = node;

		this.length++;

		return this;
	}

	pop() {
		// if the list is empty
		if (!this.head) return "List is empty.";

		// get the last node
		let poppedNode = this.tail;

		// if we have only one node
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			// if we have more than one node
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}

		this.length--;

		return poppedNode.value;
	}

	shift() {
		// if the list is empty
		if (this.length === 0) return undefined;

		// get the first node
		let firstNode = this.head;

		// if there is only one node
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			// if there are more than one node
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			firstNode.next = null;
		}

		// modify the length of the list
		this.length--;

		return firstNode.value;
	}

	//example:
	// <--head<-->node<-->node<-->tail
	// <--newNode-->
	unshift(val) {
		// create a new node
		let newNode = new Node(val);

		// if the list is empty
		if (!this.length) {
			this.head = newNode;
			this.tail = newNode;
			// if the list is not empty
		} else {
			// bind the new head
			this.head.prev = newNode;
			newNode.next = this.head;

			// update the head
			this.head = newNode;
		}

		// update the list length
		this.length++;

		return this;
	}

	//      0       1       2       3      4        5       6       7
	// <--head<-->node<-->node<-->node<-->node<-->node<-->node<-->tail
	get(idx) {
		// check if there is element at that index
		if (idx < 0 || idx >= this.length) return null;

		let middle = this.length / 2;
		let direction = 1;
		let position = 0;
		let curr = this.head;

		// check search direction
		if (idx > middle) {
			console.log("WORKING FROM END");
			direction = -1;
			position = this.length - 1;
			curr = this.tail;
		}

		for (let i = position; i < this.length; i += direction) {
			if (i === idx) {
				return curr;
			}

			if (direction === 1) {
				curr = curr.next
			} else {
				curr = curr.prev;
			}
			// console.log(i, curr);
		}
	}

	set(idx, newVal) {
		let node = this.get(idx);
		if (!node) return null;

		node.value = newVal;

		return this;
	}

	//      0       1       2       3      4        5       6       7
	// <--head<-->node<-->node<-->node<-->node<-->node<-->node<-->tail
	// <--newNode-->
	insert(idx, value) {
		// check if the idx is in the list
		if (idx < 0 || idx >= this.length) return null;


		if (idx === 0) {
			return this.unshift(value);
		} else if (idx === this.length) {
			return this.push(value);
		}

		// create new node
		let newNode = new Node(value);

		let curr = this.get(idx);

		let prev = curr.prev;

		// set up links for new node
		newNode.next = curr;
		newNode.prev = prev;

		// set up links for old nodes
		curr.prev = newNode;
		prev.next = newNode;

		this.length++;

		return this;
	}

	//      0       1       2       3      4        5       6       7
	// <--head<-->node<-->node<-->node<-->node<-->node<-->node<-->tail
	remove(idx) {
		let curr = this.get(idx);

		if (!curr) return null;

		if (idx === 0) return this.shift();
		else if (idx === this.length - 1) return this.pop();

		let prev = curr.prev;
		let next = curr.next;

		prev.next = next;
		next.prev = prev;

		curr.next = null;
		curr.prev = null;

		this.length--;

		return curr;
	}
}

// const list = new DoublyLinkedList();
// list.push(3);
// list.push(4);
// list.push(5);
// list.push(6);
// list.push(7);
// list.push(8);
// list.push(9);
// console.log(list);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(2));
// console.log(list.unshift(1));
// console.log(list.get(4));
// console.log(list.insert(2, 999));
// console.log(list.set(0, 555));
// console.log(list.remove(1));
// console.log(list);

// //      0       1       2       3      4        5       6       7
// // <--head<-->node<-->node<-->node<-->node<-->node<-->node<-->tail
// // <--newNode-->
// insert(idx, value) {
// 	// check if the idx is in the list
// 	if (idx < 0 || idx >= this.length) return null;

// 	// create new node
// 	let newNode = new Node(value);

// 	let direction = 1;
// 	let counter = 0;
// 	let middle = this.length / 2;
// 	let current = this.head;

// 	if (idx > middle) {
// 		direction = -1;
// 		current = this.tail;
// 		counter = this.length - 1;
// 	}

// 	while (idx !== counter) {
// 		counter += direction;
// 		current = current[direction === 1 ? 'next' : 'prev'];
// 	}

// 	let currPrev = current.prev;
// 	current.prev = newNode;
// 	newNode.next = current;
// 	newNode.prev = currPrev;
// 	currPrev.next = newNode;
// }