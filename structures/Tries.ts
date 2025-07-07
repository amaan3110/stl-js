class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char)!;
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char)!;
    }
    return true;
  }

  delete(word: string): boolean {
    return this.deleteHelper(this.root, word, 0);
  }

  private deleteHelper(node: TrieNode, word: string, index: number): boolean {
    if (index === word.length) {
      if (!node.isEndOfWord) return false;
      node.isEndOfWord = false;
      return node.children.size === 0;
    }

    const char = word[index];
    const nextNode = node.children.get(char);
    if (!nextNode) return false;

    const shouldDeleteCurrent = this.deleteHelper(nextNode, word, index + 1);

    if (shouldDeleteCurrent) {
      node.children.delete(char);
      return node.children.size === 0 && !node.isEndOfWord;
    }

    return false;
  }

  // Optional: Get all words in the trie (DFS)
  getAllWords(): string[] {
    const result: string[] = [];
    this.collectWords(this.root, "", result);
    return result;
  }

  private collectWords(node: TrieNode, prefix: string, result: string[]): void {
    if (node.isEndOfWord) result.push(prefix);
    for (const [char, childNode] of node.children) {
      this.collectWords(childNode, prefix + char, result);
    }
  }
}

export default Trie;
