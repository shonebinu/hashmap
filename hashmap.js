import LinkedList from "./linkedList.js";

class HashMap {
	constructor() {
		this.capacity = 16;
		this.loadFactor = 0.75;
		this.primeNumber = 31;
		this.buckets = new Array(this.capacity).fill(null);
	}

	getCapacity() {
		return this.capacity;
	}

	hash(key) {
		let hashCode = 0;

		for (let i = 0; i < key.length; i++) {
			hashCode =
				(this.primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
		}

		return hashCode;
	}

	resizeAndRehash() {
		const newCapacity = this.capacity * 2;
		const newBuckets = new Array(newCapacity).fill(null);

		for (const [key, value] of this.entries()) {
			const hC = this.hash(key);

			if (newBuckets[hC] === null) {
				newBuckets[hC] = new LinkedList();
			}

			newBuckets[hC].append(key, value);
		}

		this.capacity = newCapacity;
		this.buckets = newBuckets;
	}

	set(key, value) {
		const hC = this.hash(key);

		if (this.buckets[hC] === null) {
			this.buckets[hC] = new LinkedList();
			this.buckets[hC].append(key, value);
		} else {
			const existingNode = this.buckets[hC].find(key);
			if (existingNode !== null) {
				existingNode.value = value;
			} else {
				this.buckets[hC].append(key, value);
			}
		}

		if (this.length() > this.capacity * this.loadFactor) {
			this.resizeAndRehash();
		}
	}

	get(key) {
		const hC = this.hash(key);

		if (this.buckets[hC] === null) {
			return null;
		}

		return this.buckets[hC].find(key)?.value ?? null;
	}

	has(key) {
		return this.get(key) !== null;
	}

	remove(key) {
		const hC = this.hash(key);

		if (this.buckets[hC] === null) {
			return false;
		}

		const removed = this.buckets[hC].remove(key);
		if (removed && this.buckets[hC].size() === 0) {
			this.buckets[hC] = null;
		}

		return removed;
	}

	length() {
		let size = 0;
		for (const e of this.buckets) {
			if (e !== null) {
				size += e.size();
			}
		}
		return size;
	}

	clear() {
		this.buckets.fill(null);
	}

	entries() {
		const data = [];

		for (const e of this.buckets) {
			if (e !== null) {
				data.push(...e.getNodesData());
			}
		}

		return data;
	}

	keys() {
		return this.entries().map((pair) => pair[0]);
	}

	values() {
		return this.entries().map((pair) => pair[1]);
	}
}

export default HashMap;
