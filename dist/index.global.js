"use strict";
var STL = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // index.ts
  var index_exports = {};
  __export(index_exports, {
    BinaryTree: () => BinaryTree_default,
    Deque: () => Deque_default,
    DoublyLinkedList: () => DoublyLinkedList_default,
    Graph: () => Graph_default,
    LinkedList: () => LinkedList_default,
    MaxHeap: () => MaxHeap_default,
    MinHeap: () => MinHeap_default,
    MultiMap: () => MultiMap_default,
    Pair: () => Pair_default,
    PriorityQueue: () => PriorityQueue_default,
    Queue: () => Queue_default,
    Stack: () => Stack_default,
    Trie: () => Tries_default,
    UnorderedMap: () => UnorderedMap_default,
    UnorderedSet: () => UnorderedSet_default
  });

  // structures/Stack.ts
  var Stack = class {
    constructor() {
      this.items = [];
    }
    push(item) {
      this.items.push(item);
    }
    pop() {
      return this.items.pop();
    }
    peek() {
      return this.items[this.items.length - 1];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
  };
  var Stack_default = Stack;

  // structures/Queue.ts
  var Queue = class {
    constructor() {
      this.items = [];
    }
    enqueue(item) {
      this.items.push(item);
    }
    dequeue() {
      return this.items.shift();
    }
    front() {
      return this.items[0];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
  };
  var Queue_default = Queue;

  // structures/Deque.ts
  var Deque = class {
    constructor() {
      this.items = [];
    }
    addFront(item) {
      this.items.unshift(item);
    }
    addRear(item) {
      this.items.push(item);
    }
    removeFront() {
      return this.items.shift();
    }
    removeRear() {
      return this.items.pop();
    }
    front() {
      return this.items[0];
    }
    rear() {
      return this.items[this.items.length - 1];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
  };
  var Deque_default = Deque;

  // structures/PriorityQueue.ts
  var PriorityQueue = class {
    constructor() {
      this.items = [];
    }
    enqueue(value, priority) {
      const node = { value, priority };
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (priority < this.items[i].priority) {
          this.items.splice(i, 0, node);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(node);
      }
    }
    dequeue() {
      return this.items.shift();
    }
    peek() {
      return this.items[0];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    print() {
      return this.items.map((i) => `(${i.value}, p=${i.priority})`).join(", ");
    }
  };
  var PriorityQueue_default = PriorityQueue;

  // structures/LinkedList.ts
  var Node = class {
    constructor(value) {
      this.next = null;
      this.value = value;
    }
  };
  var LinkedList = class {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        if (this.tail) this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      this.length++;
    }
    delete(value) {
      if (!this.head) return;
      while (this.head && this.head.value === value) {
        this.head = this.head.next;
        this.length--;
      }
      let current = this.head;
      while (current && current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          this.length--;
        } else {
          current = current.next;
        }
      }
      if (this.tail && this.tail.value === value) {
        this.tail = current;
      }
    }
    find(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) return current;
        current = current.next;
      }
      return null;
    }
    size() {
      return this.length;
    }
    isEmpty() {
      return this.length === 0;
    }
  };
  var LinkedList_default = LinkedList;

  // structures/DoublyLinkedList.ts
  var Node2 = class {
    constructor(value) {
      this.prev = null;
      this.next = null;
      this.value = value;
    }
  };
  var DoublyLinkedList = class {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(value) {
      const newNode = new Node2(value);
      if (!this.tail) {
        this.head = this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
    }
    pop() {
      if (!this.tail) return null;
      const removed = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
      else this.head = null;
      this.length--;
      return removed.value;
    }
    unshift(value) {
      const newNode = new Node2(value);
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length++;
    }
    shift() {
      if (!this.head) return null;
      const removed = this.head;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      this.length--;
      return removed.value;
    }
    find(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) return current;
        current = current.next;
      }
      return null;
    }
    delete(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          if (current.prev) current.prev.next = current.next;
          else this.head = current.next;
          if (current.next) current.next.prev = current.prev;
          else this.tail = current.prev;
          this.length--;
          return true;
        }
        current = current.next;
      }
      return false;
    }
    isEmpty() {
      return this.length === 0;
    }
    size() {
      return this.length;
    }
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      return result;
    }
  };
  var DoublyLinkedList_default = DoublyLinkedList;

  // structures/Pair.ts
  var Pair = class {
    constructor(first, second) {
      this.first = first;
      this.second = second;
    }
    getFirst() {
      return this.first;
    }
    getSecond() {
      return this.second;
    }
    setFirst(value) {
      this.first = value;
    }
    setSecond(value) {
      this.second = value;
    }
    toArray() {
      return [this.first, this.second];
    }
    toString() {
      return `(${this.first}, ${this.second})`;
    }
    toObject() {
      return { first: this.first, second: this.second };
    }
  };
  var Pair_default = Pair;

  // structures/MinHeap.ts
  var MinHeap = class {
    constructor() {
      this.heap = [];
    }
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.heap[parent] <= this.heap[index]) break;
        [this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent]
        ];
        index = parent;
      }
    }
    extractMin() {
      if (this.heap.length === 0) return void 0;
      if (this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0];
      const last = this.heap.pop();
      if (last !== void 0) {
        this.heap[0] = last;
        this.sinkDown(0);
      }
      return min;
    }
    sinkDown(index) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest !== index) {
        [this.heap[smallest], this.heap[index]] = [
          this.heap[index],
          this.heap[smallest]
        ];
        this.sinkDown(smallest);
      }
    }
    peek() {
      return this.heap[0];
    }
    size() {
      return this.heap.length;
    }
  };
  var MinHeap_default = MinHeap;

  // structures/MaxHeap.ts
  var MaxHeap = class {
    constructor() {
      this.heap = [];
    }
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
        if (this.heap[parent] >= this.heap[index]) break;
        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
        index = parent;
      }
    }
    extractMax() {
      if (this.heap.length === 0) return void 0;
      if (this.heap.length === 1) return this.heap.pop();
      const max = this.heap[0];
      const end = this.heap.pop();
      if (end !== void 0) {
        this.heap[0] = end;
        this.sinkDown(0);
      }
      return max;
    }
    sinkDown(index) {
      const length = this.heap.length;
      const element = this.heap[index];
      let largest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest !== index) {
        [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
        this.sinkDown(largest);
      }
    }
    peek() {
      return this.heap[0];
    }
    size() {
      return this.heap.length;
    }
  };
  var MaxHeap_default = MaxHeap;

  // structures/MultiMap.ts
  var MultiMap = class {
    constructor() {
      this.map = /* @__PURE__ */ new Map();
    }
    set(key, value) {
      if (!this.map.has(key)) {
        this.map.set(key, []);
      }
      this.map.get(key).push(value);
    }
    get(key) {
      var _a;
      return (_a = this.map.get(key)) != null ? _a : [];
    }
    has(key) {
      return this.map.has(key);
    }
    delete(key, value) {
      if (!this.map.has(key)) return false;
      if (value === void 0) {
        return this.map.delete(key);
      }
      const values = this.map.get(key);
      const index = values.indexOf(value);
      if (index !== -1) {
        values.splice(index, 1);
        if (values.length === 0) {
          this.map.delete(key);
        }
        return true;
      }
      return false;
    }
    clear() {
      this.map.clear();
    }
    keys() {
      return Array.from(this.map.keys());
    }
    values() {
      return Array.from(this.map.values()).flat();
    }
    entries() {
      return Array.from(this.map.entries());
    }
    size() {
      return this.map.size;
    }
    forEach(callback) {
      this.map.forEach((values, key) => callback(key, values));
    }
  };
  var MultiMap_default = MultiMap;

  // structures/BinaryTree.ts
  var TreeNode = class {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  };
  var BinaryTree = class {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
      const queue = [this.root];
      while (queue.length) {
        const node = queue.shift();
        if (!node.left) {
          node.left = newNode;
          return;
        } else {
          queue.push(node.left);
        }
        if (!node.right) {
          node.right = newNode;
          return;
        } else {
          queue.push(node.right);
        }
      }
    }
    inOrder(node = this.root, result = []) {
      if (node) {
        this.inOrder(node.left, result);
        result.push(node.value);
        this.inOrder(node.right, result);
      }
      return result;
    }
    preOrder(node = this.root, result = []) {
      if (node) {
        result.push(node.value);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
      }
      return result;
    }
    postOrder(node = this.root, result = []) {
      if (node) {
        this.postOrder(node.left, result);
        this.postOrder(node.right, result);
        result.push(node.value);
      }
      return result;
    }
  };
  var BinaryTree_default = BinaryTree;

  // structures/UnorderedSet.ts
  var UnorderedSet = class {
    constructor() {
      this.set = /* @__PURE__ */ new Set();
    }
    add(value) {
      this.set.add(value);
    }
    has(value) {
      return this.set.has(value);
    }
    delete(value) {
      return this.set.delete(value);
    }
    clear() {
      this.set.clear();
    }
    size() {
      return this.set.size;
    }
    values() {
      return Array.from(this.set.values());
    }
    forEach(callback) {
      this.set.forEach(callback);
    }
  };
  var UnorderedSet_default = UnorderedSet;

  // structures/UnorderedMap.ts
  var UnorderedMap = class {
    constructor() {
      this.map = /* @__PURE__ */ new Map();
    }
    set(key, value) {
      this.map.set(key, value);
    }
    get(key) {
      return this.map.get(key);
    }
    has(key) {
      return this.map.has(key);
    }
    delete(key) {
      return this.map.delete(key);
    }
    clear() {
      this.map.clear();
    }
    size() {
      return this.map.size;
    }
    keys() {
      return Array.from(this.map.keys());
    }
    values() {
      return Array.from(this.map.values());
    }
    entries() {
      return Array.from(this.map.entries());
    }
    forEach(callback) {
      this.map.forEach(callback);
    }
  };
  var UnorderedMap_default = UnorderedMap;

  // structures/Graph.ts
  var Graph = class {
    constructor() {
      this.adjList = /* @__PURE__ */ new Map();
    }
    addVertex(vertex) {
      if (!this.adjList.has(vertex)) {
        this.adjList.set(vertex, []);
      }
    }
    addEdge(v1, v2) {
      this.addVertex(v1);
      this.addVertex(v2);
      this.adjList.get(v1).push(v2);
      this.adjList.get(v2).push(v1);
    }
    removeEdge(v1, v2) {
      this.adjList.set(
        v1,
        this.adjList.get(v1).filter((v) => v !== v2)
      );
      this.adjList.set(
        v2,
        this.adjList.get(v2).filter((v) => v !== v1)
      );
    }
    removeVertex(vertex) {
      const neighbors = this.adjList.get(vertex);
      if (neighbors) {
        for (const adjacent of neighbors) {
          this.removeEdge(vertex, adjacent);
        }
      }
      this.adjList.delete(vertex);
    }
    dfs(start, visited = /* @__PURE__ */ new Set(), result = []) {
      visited.add(start);
      result.push(start);
      const neighbors = this.adjList.get(start) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfs(neighbor, visited, result);
        }
      }
      return result;
    }
    bfs(start) {
      const visited = /* @__PURE__ */ new Set();
      const queue = [start];
      const result = [];
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          visited.add(vertex);
          result.push(vertex);
          const neighbors = this.adjList.get(vertex) || [];
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
      return result;
    }
  };
  var Graph_default = Graph;

  // structures/Tries.ts
  var TrieNode = class {
    constructor() {
      this.children = /* @__PURE__ */ new Map();
      this.isEndOfWord = false;
    }
  };
  var Trie = class {
    constructor() {
      this.root = new TrieNode();
    }
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.isEndOfWord = true;
    }
    search(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children.has(char)) return false;
        node = node.children.get(char);
      }
      return node.isEndOfWord;
    }
    startsWith(prefix) {
      let node = this.root;
      for (const char of prefix) {
        if (!node.children.has(char)) return false;
        node = node.children.get(char);
      }
      return true;
    }
    delete(word) {
      return this.deleteHelper(this.root, word, 0);
    }
    deleteHelper(node, word, index) {
      if (index === word.length) {
        if (!node.isEndOfWord) return false;
        node.isEndOfWord = false;
        return node.children.size === 0;
      }
      const char = word[index];
      const nextNode = node.children.get(char);
      if (!nextNode) return false;
      const shouldDeleteCurrent = this.deleteHelper(nextNode, word, index + 1);
      if (shouldDeleteCurrent) {
        node.children.delete(char);
        return node.children.size === 0 && !node.isEndOfWord;
      }
      return false;
    }
    // Optional: Get all words in the trie (DFS)
    getAllWords() {
      const result = [];
      this.collectWords(this.root, "", result);
      return result;
    }
    collectWords(node, prefix, result) {
      if (node.isEndOfWord) result.push(prefix);
      for (const [char, childNode] of node.children) {
        this.collectWords(childNode, prefix + char, result);
      }
    }
  };
  var Tries_default = Trie;
  return __toCommonJS(index_exports);
})();
//# sourceMappingURL=index.global.js.map