import Node from "./node.js";

const linkedList = () => {
	let HEAD = null;
	let length = 0;

	// adds a new node at end of linked list
	const append = (value) => {
		let newNode = Node(value);
		if (HEAD === null) {
			HEAD = newNode;
		} else {
			let pointer = HEAD;
			while (pointer.nextNode !== null) {
				pointer = pointer.nextNode;
			}
			pointer.nextNode = newNode;
		}
		length++;
		return newNode.value;
	};

	// adds a new node at the start of linked list
	const prepend = (value) => {
		let newNode = Node(value);
		if (HEAD === null) {
			HEAD = newNode;
		} else {
			let temp = HEAD;
			HEAD = newNode;
			HEAD.nextNode = temp;
		}
		length++;
		return newNode.value;
	};

	// return the total size of list
	const size = () => (!length ? "Empty List" : length);

	// return the first node of list
	const head = () => (!HEAD ? "Empty List" : HEAD.value);

	// return the last node of list
	const tail = () => {
		if (!HEAD) {
			return "Empty List";
		} else {
			let pointer = HEAD;
			while (pointer.nextNode !== null) {
				pointer = pointer.nextNode;
			}
			return pointer.value;
		}
	};

	// return the node at specific index of list
	const at = (index) => {
		if (!HEAD) {
			return "Empty List";
		} else {
			let pointer = HEAD;
			for (let i = 1; i < index; i++) {
				pointer = pointer.nextNode;
			}
			return pointer.value;
		}
	};

	// remove the last element from list
	const pop = () => {
		if (!HEAD) {
			return "Empty List";
		} else {
			let pointer = HEAD;
			while (pointer.nextNode.nextNode !== null) {
				pointer = pointer.nextNode;
			}
			pointer.nextNode = null;
			length--;
			return "POP!";
		}
	};

	// return true if the passed in value is in the list and otherwise returns false
	const contains = (value) => {};

	// return the index of the node containing value, or null if not found
	const find = (value) => {};

	// represents your LinkedList objects as strings, so you can print them out and preview them in the console
	// e.g.  ( value ) -> ( value ) -> ( value ) -> null
	const toString = () => {};
	return {
		append,
		prepend,
		size,
		head,
		tail,
		at,
		pop,
		contains,
		find,
		toString,
	};
};

let list = linkedList();
console.log(list.append(1));
console.log(list.prepend(4));
console.log(list.head());
console.log(list.prepend(5));
console.log(list.head());
console.log(list.size());
console.log(list.pop());
console.log(list.size());
