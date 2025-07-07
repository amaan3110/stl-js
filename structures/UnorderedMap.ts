class UnorderedMap<K, V> {
    private map: Map<K, V>;

    constructor() {
        this.map = new Map < K, V > ();
    }

    set(key: K, value: V): void {
        this.map.set(key, value);
    }

    get(key: K): V | undefined {
        return this.map.get(key);
    }

    has(key: K): boolean {
        return this.map.has(key);
    }

    delete(key: K): boolean {
        return this.map.delete(key);
    }

    clear(): void {
        this.map.clear();
    }

    size(): number {
        return this.map.size;
    }

    keys(): K[] {
        return Array.from(this.map.keys());
    }

    values(): V[] {
        return Array.from(this.map.values());
    }

    entries(): [K, V][] {
        return Array.from(this.map.entries());
    }

    forEach(callback: (value: V, key: K, map: Map<K, V>) => void): void {
        this.map.forEach(callback);
    }
}

export default UnorderedMap;
