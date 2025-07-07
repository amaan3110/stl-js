type PriorityNode<T> = {
    value: T;
    priority: number;
};

class PriorityQueue<T> {
    private items: PriorityNode<T>[] = [];

    enqueue(value: T, priority: number): void {
        const node: PriorityNode<T> = { value, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (priority < this.items[i].priority) {
                this.items.splice(i, 0, node);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(node);
        }
    }

    dequeue(): PriorityNode<T> | undefined {
        return this.items.shift();
    }

    peek(): PriorityNode<T> | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    print(): string {
        return this.items.map(i => `(${i.value}, p=${i.priority})`).join(", ");
    }
}

export default PriorityQueue;
