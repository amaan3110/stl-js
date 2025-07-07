class UnorderedSet<T> {
    private set: Set<T>;

    constructor() {
        this.set = new Set < T > ();
    }

    add(value: T): void {
        this.set.add(value);
    }

    has(value: T): boolean {
        return this.set.has(value);
    }

    delete(value: T): boolean {
        return this.set.delete(value);
    }

    clear(): void {
        this.set.clear();
    }

    size(): number {
        return this.set.size;
    }

    values(): T[] {
        return Array.from(this.set.values());
    }

    forEach(callback: (value: T) => void): void {
        this.set.forEach(callback);
    }
}

export default UnorderedSet;
