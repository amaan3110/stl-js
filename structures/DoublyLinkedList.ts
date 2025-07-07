class Node<T> {
    value: T;
    prev: Node<T> | null = null;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class DoublyLinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length: number = 0;

    push(value: T): void {
        const newNode = new Node(value);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(): T | null {
        if (!this.tail) return null;
        const removed = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        else this.head = null;
        this.length--;
        return removed.value;
    }

    unshift(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    shift(): T | null {
        if (!this.head) return null;
        const removed = this.head;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null;
        this.length--;
        return removed.value;
    }

    find(value: T): Node<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    delete(value: T): boolean {
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

    isEmpty(): boolean {
        return this.length === 0;
    }

    size(): number {
        return this.length;
    }

    toArray(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

export default DoublyLinkedList;
