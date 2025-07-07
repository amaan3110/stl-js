# @coderbaba/stl-js

A modern **STL-like data structure library** for JavaScript and TypeScript — inspired by C++ STL but tailored for JS/TS ecosystems.

> 📦 Lightweight · 📚 TypeScript-first · 🌐 CDN Friendly · 🛠️ Zero Dependencies

---

## 🚀 Installation

### Via npm (Node.js / TypeScript / Modern Bundlers)

```bash
npm install @coderbaba/stl-js
```

```javaScript
// ESM / TypeScript
import { Stack, Queue, MinHeap } from '@coderbaba/stl-js';

const stack = new Stack<number>();
stack.push(10);
console.log(stack.pop()); // 10
```

```javaScript
// Via CDN (Vanilla JavaScript)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>
<script>
  const stack = new STL.Stack();
  stack.push('Amaan');
  alert(stack.pop()); // 'Amaan'
</script>
```

```js
// Using npm (ESM/TypeScript)
import { Stack } from "@coderbaba/stl-js";
const stack = new Stack<number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const stack = new STL.Stack();

// Methods available:

// 1. push(item) - Adds an item to the top of the stack
stack.push(10);
stack.push(20);

// 2. pop() - Removes and returns the top item of the stack
console.log(stack.pop()); // 20

// 3. peek() - Returns the top item without removing it
console.log(stack.peek()); // 10

// 4. isEmpty() - Returns true if the stack is empty
console.log(stack.isEmpty()); // false

// 5. size() - Returns the number of items in the stack
console.log(stack.size()); // 1
```

```js
// Using npm (ESM/TypeScript)
import { Queue } from "@coderbaba/stl-js";
const queue = new Queue<number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const queue = new STL.Queue();

// Methods available:

// 1. enqueue(item) - Adds an item to the end of the queue
queue.enqueue(10);
queue.enqueue(20);

// 2. dequeue() - Removes and returns the item at the front of the queue
console.log(queue.dequeue()); // 10

// 3. front() - Returns the front item without removing it
console.log(queue.front()); // 20

// 4. isEmpty() - Returns true if the queue is empty
console.log(queue.isEmpty()); // false

// 5. size() - Returns the number of items in the queue
console.log(queue.size()); // 1
```

```js
// Using npm (ESM/TypeScript)
import { Deque } from "@coderbaba/stl-js";
const deque = new Deque<number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const deque = new STL.Deque();

// Methods available:

// 1. addFront(item) - Adds an item to the front of the deque
deque.addFront(20);

// 2. addRear(item) - Adds an item to the rear of the deque
deque.addRear(10);

// 3. removeFront() - Removes and returns the front item
console.log(deque.removeFront()); // 20

// 4. removeRear() - Removes and returns the rear item
console.log(deque.removeRear()); // 10

// 5. front() - Returns the front item without removing it
deque.addRear(30);
console.log(deque.front()); // 30

// 6. rear() - Returns the rear item without removing it
deque.addRear(40);
console.log(deque.rear()); // 40

// 7. isEmpty() - Returns true if the deque is empty
console.log(deque.isEmpty()); // false

// 8. size() - Returns the number of items in the deque
console.log(deque.size()); // 2
```

```js
// Using npm (ESM/TypeScript)
import { PriorityQueue } from "@coderbaba/stl-js";
const pq = new PriorityQueue<string, number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const pq = new STL.PriorityQueue();

// Methods available:

// 1. enqueue(value, priority) - Inserts a value with a given priority (lower number = higher priority)
pq.enqueue("Clean dishes", 2);
pq.enqueue("Write code", 1);
pq.enqueue("Sleep", 3);

// 2. dequeue() - Removes and returns the item with the highest priority
console.log(pq.dequeue()); // { value: 'Write code', priority: 1 }

// 3. peek() - Returns the item with the highest priority without removing it
console.log(pq.peek()); // { value: 'Clean dishes', priority: 2 }

// 4. isEmpty() - Returns true if the queue is empty
console.log(pq.isEmpty()); // false

// 5. size() - Returns the number of elements in the priority queue
console.log(pq.size()); // 2

// 6. print() - Returns a string representation of the queue
console.log(pq.print()); // (Clean dishes, p=2), (Sleep, p=3)
```

```js
// Using npm (ESM/TypeScript)
import { LinkedList } from "@coderbaba/stl-js";
const list = new LinkedList<number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const list = new STL.LinkedList();

// Methods available:

// 1. append(value) - Adds a value to the end of the linked list
list.append(10);
list.append(20);

// 2. prepend(value) - Adds a value to the beginning of the list
list.prepend(5);

// 3. delete(value) - Removes all nodes with the given value
list.delete(20);

// 4. find(value) - Returns the first node with the given value
const node = list.find(10);
console.log(node?.value); // 10

// 5. size() - Returns the number of nodes in the list
console.log(list.size()); // 2

// 6. isEmpty() - Returns true if the list is empty
console.log(list.isEmpty()); // false
```

```js
// Using npm (ESM/TypeScript)
import { DoublyLinkedList } from "@coderbaba/stl-js";
const dll = new DoublyLinkedList<number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const dll = new STL.DoublyLinkedList();

// Methods available:

// 1. push(value) - Adds a value to the end of the list
dll.push(10);
dll.push(20);

// 2. pop() - Removes and returns the value at the end of the list
console.log(dll.pop()); // 20

// 3. unshift(value) - Adds a value to the beginning of the list
dll.unshift(5);

// 4. shift() - Removes and returns the value at the beginning of the list
console.log(dll.shift()); // 5

// 5. find(value) - Returns the first node with the given value
dll.push(30);
const node = dll.find(30);
console.log(node?.value); // 30

// 6. delete(value) - Deletes the first node with the given value
dll.delete(30); // true

// 7. isEmpty() - Returns true if the list is empty
console.log(dll.isEmpty()); // false

// 8. size() - Returns the number of nodes in the list
console.log(dll.size()); // 1

// 9. toArray() - Returns all values in the list as an array
console.log(dll.toArray()); // [10]
```

```js
// Using npm (ESM/TypeScript)
import { CircularLinkedList } from "@coderbaba/stl-js";
const cll = new CircularLinkedList<number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const cll = new STL.CircularLinkedList();

// Methods available:

// 1. append(value) - Adds a value to the end of the circular list
cll.append(10);
cll.append(20);

// 2. prepend(value) - Adds a value to the beginning of the list
cll.prepend(5);

// 3. delete(value) - Removes all occurrences of the given value
cll.delete(20);

// 4. find(value) - Returns the first node with the given value
const node = cll.find(10);
console.log(node?.value); // 10

// 5. contains(value) - Returns true if the value exists in the list
console.log(cll.contains(5)); // true

// 6. size() - Returns the number of elements in the list
console.log(cll.size()); // 2

// 7. isEmpty() - Checks whether the list is empty
console.log(cll.isEmpty()); // false

// 8. clear() - Removes all nodes
cll.clear();
console.log(cll.isEmpty()); // true

// 9. toArray(limit?) - Returns an array of values (optional limit)
cll.append(1);
cll.append(2);
cll.append(3);
console.log(cll.toArray()); // [1, 2, 3]

// 10. print(limit?) - Logs the list up to a limit to avoid infinite loop
cll.print(); // 1 -> 2 -> 3 -> ...
```

```js
// Using npm (ESM/TypeScript)
import { Pair } from "@coderbaba/stl-js";
const pair = new Pair<string, string>("TS", "JS");

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const pair = new STL.Pair("TS", "JS");

// Methods available:

// 1. getFirst() - Returns the first value in the pair
console.log(pair.getFirst()); // "TS"

// 2. getSecond() - Returns the second value in the pair
console.log(pair.getSecond()); // "JS"

// 3. setFirst(value) - Sets a new first value
pair.setFirst("Coder");

// 4. setSecond(value) - Sets a new second value
pair.setSecond("Baba");

// 5. toArray() - Converts the pair to an array
console.log(pair.toArray()); // ["Coder", "Baba"]

// 6. toString() - Converts the pair to a string representation
console.log(pair.toString()); // (Coder, Baba)

// 7. toObject() - Converts the pair to an object representation
console.log(pair.toObject()); // { first: "Coder", second: "Baba" }
```

```js
// Using npm (ESM/TypeScript)
import { MinHeap } from "@coderbaba/stl-js";
const heap = new MinHeap<number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const heap = new STL.MinHeap();

// Methods available:

// 1. insert(value) - Inserts a value into the heap
heap.insert(40);
heap.insert(10);
heap.insert(30);
heap.insert(20);

// 2. extractMin() - Removes and returns the minimum (top) element
console.log(heap.extractMin()); // 10

// 3. peek() - Returns the minimum value without removing it
console.log(heap.peek()); // 20

// 4. size() - Returns the number of elements in the heap
console.log(heap.size()); // 3
```

```js
// Using npm (ESM/TypeScript)
import { MaxHeap } from "@coderbaba/stl-js";
const heap = new MaxHeap<number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const heap = new STL.MaxHeap();

// Methods available:

// 1. insert(value) - Inserts a value into the heap
heap.insert(15);
heap.insert(40);
heap.insert(30);
heap.insert(50);

// 2. extractMax() - Removes and returns the maximum (top) element
console.log(heap.extractMax()); // 50

// 3. peek() - Returns the maximum value without removing it
console.log(heap.peek()); // 40

// 4. size() - Returns the number of elements in the heap
console.log(heap.size()); // 3
```

```js
// Using npm (ESM/TypeScript)
import { MultiMap } from "@coderbaba/stl-js";
const multimap = new MultiMap<string, string>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const multimap = new STL.MultiMap();

// Methods available:

// 1. set(key, value) - Adds a value under the specified key
multimap.set("fruit", "apple");
multimap.set("fruit", "banana");
multimap.set("color", "red");

// 2. get(key) - Returns all values associated with the key
console.log(multimap.get("fruit")); // ["apple", "banana"]

// 3. has(key) - Checks if the key exists
console.log(multimap.has("color")); // true

// 4. delete(key) - Deletes the key and all its values
multimap.delete("color"); // true

// 5. delete(key, value) - Deletes a specific value from the key
multimap.delete("fruit", "banana"); // true

// 6. clear() - Removes all keys and values
// multimap.clear();

// 7. keys() - Returns all keys in the multimap
console.log(multimap.keys()); // ["fruit"]

// 8. values() - Returns all values in the multimap
console.log(multimap.values()); // ["apple"]

// 9. entries() - Returns all key-value[] pairs
console.log(multimap.entries()); // [["fruit", ["apple"]]]

// 10. size() - Returns the number of keys
console.log(multimap.size()); // 1

// 11. forEach(callback) - Iterates over each key and its values
multimap.forEach((key, values) => {
  console.log(`${key}: ${values.join(", ")}`);
});
```

```js
// Using npm (ESM/TypeScript)
import { BinaryTree } from "@coderbaba/stl-js";
const tree = new BinaryTree<number>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const tree = new STL.BinaryTree();

// Methods available:

// 1. insert(value) - Inserts a value into the tree using level-order (BFS)
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);

// Tree structure (level-order):
//        10
//       /  \
//     20    30
//    /
//  40

// 2. inOrder() - Returns an array of values using in-order traversal (Left → Root → Right)
console.log(tree.inOrder()); // [40, 20, 10, 30]

// 3. preOrder() - Returns an array of values using pre-order traversal (Root → Left → Right)
console.log(tree.preOrder()); // [10, 20, 40, 30]

// 4. postOrder() - Returns an array of values using post-order traversal (Left → Right → Root)
console.log(tree.postOrder()); // [40, 20, 30, 10]
```

```js
// Using npm (ESM/TypeScript)
import { UnorderedSet } from "@coderbaba/stl-js";
const mySet = new UnorderedSet<string>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const mySet = new STL.UnorderedSet();

// Methods available:

// 1. add(value) - Adds a value to the set
mySet.add("apple");
mySet.add("banana");

// 2. has(value) - Checks if the set contains the value
console.log(mySet.has("apple")); // true
console.log(mySet.has("grape")); // false

// 3. delete(value) - Removes a value from the set
mySet.delete("banana"); // true

// 4. clear() - Removes all values from the set
// mySet.clear();

// 5. size() - Returns the number of elements in the set
console.log(mySet.size()); // 1

// 6. values() - Returns all values in the set as an array
console.log(mySet.values()); // ["apple"]

// 7. forEach(callback) - Executes a callback for each element in the set
mySet.forEach((value) => {
  console.log("Item:", value);
});
```

```js
// Using npm (ESM/TypeScript)
import { UnorderedMap } from "@coderbaba/stl-js";
const map = new UnorderedMap<string, string>();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const map = new STL.UnorderedMap();

// Methods available:

// 1. set(key, value) - Adds or updates a key-value pair
map.set("name", "John");
map.set("role", "Developer");

// 2. get(key) - Retrieves the value for a given key
console.log(map.get("name")); // "Amaan"

// 3. has(key) - Checks if a key exists in the map
console.log(map.has("role")); // true

// 4. delete(key) - Removes a key-value pair
map.delete("role"); // true

// 5. clear() - Removes all entries from the map
// map.clear();

// 6. size() - Returns the number of entries in the map
console.log(map.size()); // 1

// 7. keys() - Returns all keys in the map
console.log(map.keys()); // ["name"]

// 8. values() - Returns all values in the map
console.log(map.values()); // ["Amaan"]

// 9. entries() - Returns all key-value pairs as an array
console.log(map.entries()); // [["name", "Amaan"]]

// 10. forEach(callback) - Iterates over each key-value pair
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

```js
// Using npm (ESM/TypeScript)
import { Graph } from "@coderbaba/stl-js";
const graph = new Graph();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const graph = new STL.Graph();

// Methods available:

// 1. addVertex(vertex) - Adds a new vertex
graph.addVertex("A");
graph.addVertex("B");

// 2. addEdge(v1, v2) - Adds an undirected edge between two vertices
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

// Graph structure:
// A - B
// |   |
// C   D

// 3. removeEdge(v1, v2) - Removes the edge between v1 and v2
graph.removeEdge("A", "B");

// 4. removeVertex(vertex) - Removes the vertex and all its edges
graph.removeVertex("C");

// 5. dfs(start) - Performs depth-first traversal starting from `start`
console.log(graph.dfs("A")); // Example: ["A", "B", "D"]

// 6. bfs(start) - Performs breadth-first traversal starting from `start`
console.log(graph.bfs("A")); // Example: ["A", "B", "D"]
```

```js
// Using npm (ESM/TypeScript)
import { Trie } from "@coderbaba/stl-js";
const trie = new Trie();

// Using CDN (Vanilla JS)
<script src="https://unpkg.com/@coderbaba/stl-js/dist/index.global.js"></script>;
const trie = new STL.Trie();

// Methods available:

// 1. insert(word) - Inserts a word into the trie
trie.insert("apple");
trie.insert("app");
trie.insert("bat");

// 2. search(word) - Returns true if the exact word exists
console.log(trie.search("app")); // true
console.log(trie.search("apple")); // true
console.log(trie.search("appl")); // false

// 3. startsWith(prefix) - Returns true if any word starts with the prefix
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("ba")); // true
console.log(trie.startsWith("ca")); // false

// 4. delete(word) - Deletes a word if it exists
console.log(trie.delete("apple")); // true
console.log(trie.search("apple")); // false

// 5. getAllWords() - Returns all words stored in the trie
console.log(trie.getAllWords()); // ["app", "bat"]
```
