class Graph<T> {
  private adjList: Map<T, T[]>;

  constructor() {
    this.adjList = new Map<T, T[]>();
  }

  addVertex(vertex: T): void {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(v1: T, v2: T): void {
    this.addVertex(v1);
    this.addVertex(v2);
    this.adjList.get(v1)!.push(v2);
    this.adjList.get(v2)!.push(v1);
  }

  removeEdge(v1: T, v2: T): void {
    this.adjList.set(
      v1,
      this.adjList.get(v1)!.filter((v) => v !== v2)
    );
    this.adjList.set(
      v2,
      this.adjList.get(v2)!.filter((v) => v !== v1)
    );
  }

  removeVertex(vertex: T): void {
    const neighbors = this.adjList.get(vertex);
    if (neighbors) {
      for (const adjacent of neighbors) {
        this.removeEdge(vertex, adjacent);
      }
    }
    this.adjList.delete(vertex);
  }

  dfs(start: T, visited: Set<T> = new Set(), result: T[] = []): T[] {
    visited.add(start);
    result.push(start);
    const neighbors = this.adjList.get(start) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfs(neighbor, visited, result);
      }
    }
    return result;
  }

  bfs(start: T): T[] {
    const visited = new Set<T>();
    const queue: T[] = [start];
    const result: T[] = [];

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        const neighbors = this.adjList.get(vertex) || [];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
    return result;
  }
}

export default Graph;
