import LinkedList from "./linkedList.js";

class HashMap {
	constructor() {
		this.capacity = 16;
		this.loadFactor = 0.8;
		this.primeNumber = 31;
		this.buckets = new Array(this.capacity).fill(null);
	}

	hash(key) {
		let hashCode = 0;

		for (let i = 0; i < key.length; i++) {
			hashCode =
				(this.primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
		}

		return hashCode;
	}

	set(key, value) {
		const hC = this.hash(key);

		if (this.buckets[hC] === null) {
			this.buckets[hC] = new LinkedList();
			this.buckets[hC].append(key, value);
			return;
		}

		const existingNode = this.buckets[hC].find(key);
		if (existingNode !== null) {
			existingNode.value = value;
			return;
		}

		this.buckets[hC].append(key, value);
	}

	get(key) {
		const hC = this.hash(key);

		if (this.buckets[hC] === null) {
			return null;
		}

		return this.buckets[hC].find(key)?.value ?? null;
	}

	has(key) {
		if (get(key) === null) {
			return false;
		}

		return true;
	}
}

export default HashMap;
