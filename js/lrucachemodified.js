//node
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// lru cache
class LRU {
  constructor(limit = 3) {
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.store = new Map();
  }

  get(key) {
    if (!this.store.get(key)) {
      return -1;
    } else {
      const node = this.store.get(key);
      if (node !== this.head) {
        this.removeNode(node);
        this.addNode(node);
      }
    }
  }
  set(key, value) {
    if (this.store.has(key)) {
      const node = this.store.get(key);
      node.value = value;
      if (node !== this.head) {
        this.removeNode(key);
        this.addNode(node);
      }
    } else {
      const node = new Node(key, value);
      this.store.set(key, node);

      this.addNode(node);

      if (this.store.size > this.limit) {
        const tail = this.tail;
        this.removeNode(tail);
        this.store.delete(tail.key);
      }
    }
  }
  addNode(node) {
    if (this.head == this.tail) {
      this.head = node;
      this.tail = node;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  removeNode(node) {
    if (node == this.head) {
      this.head = node.next;
    }
    if (node == this.tail) {
      this.tail = node.prev;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
  }
}
// https://dev.to/seanwelshbrown/implement-a-simple-lru-cache-in-javascript-4o92
class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) {
      return;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
      this.cache.set(key, value);
    } else {
      this.cache.set(key, value);
    }
  }
  print() {
    for (let [key, value] of this.cache) {
      console.log(key, value);
    }
  }
}
const obj = new LRU(3);
obj.set("1", "Mridul");

obj.set("2", "Naman");
obj.set("3", "Rohan");
obj.get("1");
obj.set("4", "Driysham");
obj.print();
