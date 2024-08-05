import { Node } from './node';

export class Queue<T> {
  front: null | Node<T>;

  rear: null | Node<T>;

  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null && this.rear === null;
  }

  size() {
    let current = this.front;
    let count = 0;

    while (current !== null) {
      count += 1;
      current = current.next;
    }

    return count;
  }

  peekFront() {
    return this.front;
  }

  peekRear() {
    return this.rear;
  }

  enqueue(data: T) {
    const node = new Node(data);

    if (this.isEmpty()) this.front = node;
    else this.rear!.next = node;

    this.rear = node;

    return node;
  }

  dequeue() {
    const current = this.front;

    if (current === null) return null;

    if (current.next === null) {
      this.rear = null;
    }

    this.front = current.next;
    current.next = null;

    return current;
  }

  display() {
    const array: (T | string)[] = [];
    let current = this.front;

    array.push('front');

    while (current !== null) {
      array.push(current.value);
      current = current.next;
    }

    array.push('rear');
    return array.join(' → ');
  }
}
