class MaxHeap<T> {
  private heap: T[] = [];

  insert(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  private bubbleUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] >= this.heap[index]) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  extractMax(): T | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    const end = this.heap.pop();
    if (end !== undefined) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return max;
  }

  private sinkDown(index: number): void {
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

  peek(): T | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }
}

export default MaxHeap;
