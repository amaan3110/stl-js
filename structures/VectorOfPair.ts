import Pair from "./Pair";

class VectorOfPair<T, U> {
  private data: Pair<T, U>[];

  constructor() {
    this.data = [];
  }

  push(first: T, second: U): void {
    this.data.push(new Pair(first, second));
  }

  pop(): Pair<T, U> | undefined {
    return this.data.pop();
  }

  get(index: number): Pair<T, U> | undefined {
    return this.data[index];
  }

  size(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  clear(): void {
    this.data = [];
  }

  toArray(): [T, U][] {
    return this.data.map((pair) => pair.toArray());
  }

  toString(): string {
    return `[${this.data.map((pair) => pair.toString()).join(", ")}]`;
  }

  findByFirst(value: T): Pair<T, U> | undefined {
    return this.data.find((pair) => pair.getFirst() === value);
  }

  findBySecond(value: U): Pair<T, U> | undefined {
    return this.data.find((pair) => pair.getSecond() === value);
  }

  forEach(callback: (pair: Pair<T, U>, index: number) => void): void {
    this.data.forEach(callback);
  }

  sortByFirst(compareFn?: (a: T, b: T) => number): void {
    this.data.sort((a, b) => {
      const aFirst = a.getFirst();
      const bFirst = b.getFirst();
      return compareFn
        ? compareFn(aFirst, bFirst)
        : (aFirst as any) - (bFirst as any);
    });
  }

  sortBySecond(compareFn?: (a: U, b: U) => number): void {
    this.data.sort((a, b) => {
      const aSecond = a.getSecond();
      const bSecond = b.getSecond();
      return compareFn
        ? compareFn(aSecond, bSecond)
        : (aSecond as any) - (bSecond as any);
    });
  }
}

export default VectorOfPair;
