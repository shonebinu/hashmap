import LinkedList from "./linkedList.js";

class HashSet {
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

	size() {
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

	contains(key) {
		const hC = this.hash(key);

		if (this.buckets[hC] === null) {
			return false;
		}

		return this.buckets[hC].find(key) !== null;
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

	add(key) {
		const hC = this.hash(key);

		if (this.buckets[hC] === null) {
			this.buckets[hC] = new LinkedList();
			this.buckets[hC].append(key);
		} else {
			const existingNode = this.buckets[hC].find(key);
			if (existingNode === null) this.buckets[hC].append(key);
		}

		if (this.size() > this.capacity * this.loadFactor) {
			this.resizeAndRehash();
		}
	}

	entries() {
		const data = [];

		for (const e of this.buckets) {
			if (e !== null) {
				data.push(...e.getNodesData());
			}
		}

		return data.map((pair) => pair[0]);
	}

	resizeAndRehash() {
		const newCapacity = this.capacity * 2;
		this.capacity = newCapacity;
		const newBuckets = new Array(newCapacity).fill(null);

		for (const key of this.entries()) {
			const hC = this.hash(key);

			if (newBuckets[hC] === null) {
				newBuckets[hC] = new LinkedList();
			}

			newBuckets[hC].append(key);
		}

		this.buckets = newBuckets;
	}
}

export default HashSet;
