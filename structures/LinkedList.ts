class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  append(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      if (this.tail) this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.length++;
  }

  delete(value: T): void {
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

  find(value: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}

export default LinkedList;
