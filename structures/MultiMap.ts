class MultiMap<K, V> {
  private map: Map<K, V[]>;

  constructor() {
    this.map = new Map<K, V[]>();
  }

  set(key: K, value: V): void {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    this.map.get(key)!.push(value);
  }

  get(key: K): V[] {
    return this.map.get(key) ?? [];
  }

  has(key: K): boolean {
    return this.map.has(key);
  }

  delete(key: K, value?: V): boolean {
    if (!this.map.has(key)) return false;

    if (value === undefined) {
      return this.map.delete(key);
    }

    const values = this.map.get(key)!;
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

  clear(): void {
    this.map.clear();
  }

  keys(): K[] {
    return Array.from(this.map.keys());
  }

  values(): V[] {
    return Array.from(this.map.values()).flat();
  }

  entries(): [K, V[]][] {
    return Array.from(this.map.entries());
  }

  size(): number {
    return this.map.size;
  }

  forEach(callback: (key: K, values: V[]) => void): void {
    this.map.forEach((values, key) => callback(key, values));
  }
}

export default MultiMap;
