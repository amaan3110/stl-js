declare class Stack<T> {
    private items;
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

declare class Queue<T> {
    private items;
    enqueue(item: T): void;
    dequeue(): T | undefined;
    front(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

declare class Deque<T> {
    private items;
    addFront(item: T): void;
    addRear(item: T): void;
    removeFront(): T | undefined;
    removeRear(): T | undefined;
    front(): T | undefined;
    rear(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

type PriorityNode<T> = {
    value: T;
    priority: number;
};
declare class PriorityQueue<T> {
    private items;
    enqueue(value: T, priority: number): void;
    dequeue(): PriorityNode<T> | undefined;
    peek(): PriorityNode<T> | undefined;
    isEmpty(): boolean;
    size(): number;
    print(): string;
}

declare class Node$1<T> {
    value: T;
    next: Node$1<T> | null;
    constructor(value: T);
}
declare class LinkedList<T> {
    private head;
    private tail;
    private length;
    append(value: T): void;
    prepend(value: T): void;
    delete(value: T): void;
    find(value: T): Node$1<T> | null;
    size(): number;
    isEmpty(): boolean;
}

declare class Node<T> {
    value: T;
    prev: Node<T> | null;
    next: Node<T> | null;
    constructor(value: T);
}
declare class DoublyLinkedList<T> {
    private head;
    private tail;
    private length;
    push(value: T): void;
    pop(): T | null;
    unshift(value: T): void;
    shift(): T | null;
    find(value: T): Node<T> | null;
    delete(value: T): boolean;
    isEmpty(): boolean;
    size(): number;
    toArray(): T[];
}

declare class Pair<T, U> {
    private first;
    private second;
    constructor(first: T, second: U);
    getFirst(): T;
    getSecond(): U;
    setFirst(value: T): void;
    setSecond(value: U): void;
    toArray(): [T, U];
    toString(): string;
    toObject(): {
        first: T;
        second: U;
    };
}

declare class MinHeap<T> {
    private heap;
    insert(value: T): void;
    private bubbleUp;
    extractMin(): T | undefined;
    private sinkDown;
    peek(): T | undefined;
    size(): number;
}

declare class MaxHeap<T> {
    private heap;
    insert(value: T): void;
    private bubbleUp;
    extractMax(): T | undefined;
    private sinkDown;
    peek(): T | undefined;
    size(): number;
}

declare class MultiMap<K, V> {
    private map;
    constructor();
    set(key: K, value: V): void;
    get(key: K): V[];
    has(key: K): boolean;
    delete(key: K, value?: V): boolean;
    clear(): void;
    keys(): K[];
    values(): V[];
    entries(): [K, V[]][];
    size(): number;
    forEach(callback: (key: K, values: V[]) => void): void;
}

declare class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    constructor(value: T);
}
declare class BinaryTree<T> {
    private root;
    insert(value: T): void;
    inOrder(node?: TreeNode<T> | null, result?: T[]): T[];
    preOrder(node?: TreeNode<T> | null, result?: T[]): T[];
    postOrder(node?: TreeNode<T> | null, result?: T[]): T[];
}

declare class UnorderedSet<T> {
    private set;
    constructor();
    add(value: T): void;
    has(value: T): boolean;
    delete(value: T): boolean;
    clear(): void;
    size(): number;
    values(): T[];
    forEach(callback: (value: T) => void): void;
}

declare class UnorderedMap<K, V> {
    private map;
    constructor();
    set(key: K, value: V): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    delete(key: K): boolean;
    clear(): void;
    size(): number;
    keys(): K[];
    values(): V[];
    entries(): [K, V][];
    forEach(callback: (value: V, key: K, map: Map<K, V>) => void): void;
}

declare class Graph<T> {
    private adjList;
    constructor();
    addVertex(vertex: T): void;
    addEdge(v1: T, v2: T): void;
    removeEdge(v1: T, v2: T): void;
    removeVertex(vertex: T): void;
    dfs(start: T, visited?: Set<T>, result?: T[]): T[];
    bfs(start: T): T[];
}

declare class Trie {
    private root;
    constructor();
    insert(word: string): void;
    search(word: string): boolean;
    startsWith(prefix: string): boolean;
    delete(word: string): boolean;
    private deleteHelper;
    getAllWords(): string[];
    private collectWords;
}

export { BinaryTree, Deque, DoublyLinkedList, Graph, LinkedList, MaxHeap, MinHeap, MultiMap, Pair, PriorityQueue, Queue, Stack, Trie, UnorderedMap, UnorderedSet };
