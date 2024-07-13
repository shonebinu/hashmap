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

	head() {
		return this.#head;
	}

	tail() {
		return this.#tail;
	}

	size() {
		return this.#size;
	}

	toString() {
		let string = "";
		let tmp = this.#head;

		while (tmp) {
			string += `( ${tmp.key}: ${tmp.value} ) -> `;
			tmp = tmp.link;
		}

		return string.concat("null");
	}

	getNodesData() {
		const data = [];
		let tmp = this.#head;

		while (tmp) {
			data.push([tmp.key, tmp.value]);
			tmp = tmp.link;
		}

		return data;
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

	remove(key) {
		if (this.#head === null) {
			return false;
		}

		if (this.#head.key === key) {
			if (this.#head === this.#tail) {
				this.#head = this.#tail = null;
			} else {
				this.#head = this.#head.link;
			}
			this.#size--;
			return true;
		}

		let tmp = this.#head;
		while (tmp.link !== null && tmp.link.key !== key) {
			tmp = tmp.link;
		}

		if (tmp.link === null) {
			return false;
		}

		if (tmp.link === this.#tail) {
			this.#tail = tmp;
		}

		tmp.link = tmp.link.link;
		this.#size--;
		return true;
	}
}

export default LinkedList;
