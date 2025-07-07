class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class CircularLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length = 0;

  append(value: T): void {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
      node.next = node;
    } else {
      node.next = this.head;
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
  }

  prepend(value: T): void {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
      node.next = node;
    } else {
      node.next = this.head;
      this.tail!.next = node;
      this.head = node;
    }
    this.length++;
  }

  delete(value: T): boolean {
    if (!this.head) return false;

    let current = this.head;
    let prev: Node<T> | null = this.tail;
    let deleted = false;
    let count = 0;

    while (count < this.length && current) {
      if (current.value === value) {
        if (current === this.head) this.head = this.head.next;
        if (current === this.tail) this.tail = prev;

        if (prev) prev.next = current.next;
        current = current.next!;
        this.length--;
        deleted = true;

        if (this.length === 0) {
          this.head = this.tail = null;
          break;
        }

        if (current === this.head) break;
        count++;
        continue;
      }

      prev = current;
      current = current.next!;
      count++;
    }

    return deleted;
  }

  find(value: T): Node<T> | null {
    if (!this.head) return null;

    let current = this.head;
    let count = 0;

    while (count < this.length) {
      if (current.value === value) return current;
      current = current.next!;
      count++;
    }

    return null;
  }

  contains(value: T): boolean {
    return this.find(value) !== null;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }

  clear(): void {
    this.head = this.tail = null;
    this.length = 0;
  }

  toArray(limit = this.length): T[] {
    const result: T[] = [];
    if (!this.head || limit === 0) return result;

    let current = this.head;
    let count = 0;

    do {
      result.push(current.value);
      current = current.next!;
      count++;
    } while (current !== this.head && count < limit);

    return result;
  }

  print(limit = this.length): void {
    console.log(this.toArray(limit).join(" -> ") + " -> ...");
  }
}

export default CircularLinkedList;
