import linkedList from './linkedListHS.js';

function hash(key, mapCapacity) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }
  return hashCode % mapCapacity;
}

class HashSet {
  constructor(capacity) {
    this.buckets = Array.from({ length: capacity }, () => new linkedList());
    this.loadFactor = 0.75;
    this.capacity = this.buckets.length;
    this.originalSize = capacity;
  }

  set(key) {
    if (this.needsResize()) {
      this.#resize();
    }
    if (!this.has(key)) {
      //   console.log('key not found');
      const bucketIndex = hash(key, this.capacity);
      this.buckets[bucketIndex].append(key);
    }
    //   console.log('key found, return');
  }

  #resize() {
    const allEntries = this.keys();
    this.capacity = this.capacity * 2;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new linkedList()
    );

    allEntries.forEach((element) => {
      this.set(element);
    });
  }

  needsResize() {
    if (this.length() + 1 > this.capacity * this.loadFactor) {
      return true;
    } else {
      return false;
    }
  }

  has(key) {
    const bucketIndex = hash(key, this.capacity);
    return this.buckets[bucketIndex].contains(key);
  }

  remove(key) {
    if (this.has(key)) {
      const bucketIndex = hash(key, this.capacity);
      const nodeIndex = this.buckets[bucketIndex].find(key);
      this.buckets[bucketIndex].removeAt(nodeIndex);
      return true;
    } else {
      return false;
    }
  }

  selectNode(key) {
    const bucketIndex = hash(key, this.capacity);
    const lListIndex = this.buckets[bucketIndex].find(key);
    const node = this.buckets[bucketIndex].at(lListIndex);

    return node;
  }

  length() {
    let sum = 0;
    for (let i = 0; i < this.buckets.length; i++) {
      sum += this.buckets[i].size();
    }
    return sum;
  }

  clear() {
    this.buckets = Array.from(
      { length: this.originalSize },
      () => new linkedList()
    );
    this.capacity = this.originalSize;
  }

  keys() {
    return this.arrOfReqValues('key');
  }

  arrOfReqValues(reqValue) {
    let allReqValues = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const valueFromBucket = this.buckets[i].arrFromNodes(reqValue);

      if (valueFromBucket) {
        allReqValues.push(...valueFromBucket);
      }
    }
    return allReqValues;
  }

  checkBucket(bckI) {
    console.log(this.buckets[bckI]);
  }
}

export default HashSet;
