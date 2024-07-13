import HashMap from "./hashmap.js";

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
console.log(test.remove("sun"));

console.log(test.entries());
