class Pair<T, U> {
    private first: T;
    private second: U;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    getFirst(): T {
        return this.first;
    }

    getSecond(): U {
        return this.second;
    }

    setFirst(value: T): void {
        this.first = value;
    }

    setSecond(value: U): void {
        this.second = value;
    }

    toArray(): [T, U] {
        return [this.first, this.second];
    }

    toString(): string {
        return `(${this.first}, ${this.second})`;
    }

    toObject(): { first: T; second: U } {
        return { first: this.first, second: this.second };
    }
}

export default Pair;
