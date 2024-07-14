import HashMap from "./hashmap.js";
import HashSet from "./hashset.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("lion", "simba");
test.set("apple", "green");
test.set("banana", "brown");
test.set("carrot", "blue");
test.set("elephant", "black");

console.log(test.getCapacity());

test.set("sun", "yellow");
test.set("moon", "silver");
test.set("ocean", "blue");
test.set("mountain", "green");
test.set("forest", "emerald");

console.log(test.entries());
console.log(test.length());
console.log(test.getCapacity());

test.clear();
console.log(test.length());

test.set("sun", "yellow");
test.set("moon", "silver");
test.set("ocean", "blue");
test.set("mountain", "green");
test.set("forest", "emerald");

test.set("sun", "orange");

console.log(test.has("sun"));
console.log(test.get("sun"));

console.log(test.entries());

// HASH SET
const set = new HashSet();

// Add elements
set.add("apple");
set.add("banana");
set.add("carrot");
set.add("dog");
set.add("elephant");
set.add("frog");

// Check size and entries
console.log("Size:", set.size());
console.log("Entries:", set.entries());

// Check contains method
console.log('Contains "banana":', set.contains("banana")); // true
console.log('Contains "cat":', set.contains("cat")); // false

// Remove an element
console.log('Remove "dog":', set.remove("dog"));
console.log("Size after removal:", set.size());

// Clear the set
set.clear();
console.log("Size after clearing:", set.size());

// Add more elements to trigger resize
set.add("sun");
set.add("moon");
set.add("ocean");
set.add("mountain");
set.add("forest");

// Check entries after resize
console.log("Entries after resize:", set.entries());

// Additional tests after resizing
console.log('Contains "moon" after resize:', set.contains("moon")); // true
console.log('Remove "sun" after resize:', set.remove("sun"));
console.log('Entries after removing "sun":', set.entries());
console.log("Bucket size: ", set.getCapacity());

set.add("apple");
console.log("Bucket size: ", set.getCapacity());
set.add("banana");
console.log("Bucket size: ", set.getCapacity());
set.add("carrot");
console.log("Bucket size: ", set.getCapacity());
set.add("dog");
console.log("Bucket size: ", set.getCapacity());
set.add("elephant");
console.log("Bucket size: ", set.getCapacity());
set.add("frog");
console.log("Bucket size: ", set.getCapacity());
set.add("river");
console.log("Bucket size: ", set.getCapacity());
set.add("lake");
console.log("Bucket size: ", set.getCapacity());
set.add("desert");
console.log("Bucket size: ", set.getCapacity());
set.add("apple");
console.log("Bucket size: ", set.getCapacity());
set.add("valley");
console.log("Bucket size: ", set.getCapacity());
set.add("canyon");
console.log("Bucket size: ", set.getCapacity());

console.log(set.entries());
