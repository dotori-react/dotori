export class MaxHeap {
  heap: (number | null)[] = [];

  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length;
  }

  swap(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value: number) {
    this.heap.push(value);
    let currentIndex = this.size() - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex > 0 && (this.heap[currentIndex] ?? 0) > (this.heap[parentIndex] ?? 0)) {
      this.swap(currentIndex, parentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const max = this.heap[1];

    if (this.size() < 2) return max;

    this.heap[1] = this.heap.pop() as number;

    let parentIndex = 1;
    let leftIndex = parentIndex * 2;
    let rightIndex = parentIndex * 2 + 1;

    while (
      (this.heap[parentIndex] ?? 0) < (this.heap[leftIndex] ?? 0) ||
      (this.heap[parentIndex] ?? 0) < (this.heap[rightIndex] ?? 0)
    ) {
      const changedIndex = (this.heap[leftIndex] ?? 0) < (this.heap[rightIndex] ?? 0) ? rightIndex : leftIndex;

      this.swap(parentIndex, changedIndex);

      parentIndex = changedIndex;
      leftIndex = parentIndex * 2;
      rightIndex = parentIndex * 2 + 1;
    }

    return max;
  }
}
