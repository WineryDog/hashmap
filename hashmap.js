import linkedList from './linkedList.js';

function hash(key, mapCapacity) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }
  return hashCode % mapCapacity;
}

class HashMap {
  constructor(capacity) {
    this.buckets = Array.from({ length: capacity }, () => new linkedList());
    this.loadFactor = 0.75;
    this.capacity = this.buckets.length;
    this.originalSize = capacity;
  }

  set(key, value) {
    if (this.needsResize()) {
      this.#resize();
    }

    if (this.has(key)) {
      this.selectNode(key).value = value;
    } else {
      const bucketIndex = hash(key, this.capacity);
      this.buckets[bucketIndex].append(key, value);
    }
  }

  #resize() {
    const allEntries = this.entries();
    this.capacity = this.capacity * 2;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new linkedList()
    );

    allEntries.forEach((element) => {
      this.set(element[0], element[1]);
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

  get(key) {
    if (this.has(key)) {
      return this.selectNode(key).value;
    } else {
      return null;
    }
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

  values() {
    return this.arrOfReqValues('value');
  }

  entries() {
    return this.arrOfReqValues('entries');
  }

  arrOfReqValues(reqValue) {
    let allReqValues = [];
    for (let i = 0; i < this.buckets.length; i++) {
      const valueFromBucket =
        reqValue === 'entries'
          ? this.buckets[i].pairFromNodes()
          : this.buckets[i].arrFromNodes(reqValue);

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

export default HashMap;
