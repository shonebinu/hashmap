class Node {
	constructor(key = null, value = null, link = null) {
		this.key = key;
		this.value = value;
		this.link = link;
	}
}

class LinkedList {
	#head = null;
	#tail = null;
	#size = 0;

	toString() {
		let string = "";
		let tmp = this.#head;

		while (tmp) {
			string += `( ${tmp.key}: ${tmp.value} ) -> `;
			tmp = tmp.link;
		}

		return string.concat("null");
	}

	append(key, value) {
		if (this.#head === null) {
			this.#head = this.#tail = new Node(key, value);
		} else {
			this.#tail.link = new Node(key, value);
			this.#tail = this.#tail.link;
		}

		this.#size++;
	}

	find(key) {
		let tmp = this.#head;
		for (let i = 0; tmp; i++) {
			if (tmp.key === key) {
				return tmp;
			}
			tmp = tmp.link;
		}
		return null;
	}
}

export default LinkedList;
