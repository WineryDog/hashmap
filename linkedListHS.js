class Node {
  constructor() {
    this.key = null;
    this.nextNode = null;
  }
}

class linkedList {
  constructor() {
    this.listHead = null;
  }

  append(key) {
    const newNode = new Node();
    newNode.key = key;
    if (!this.listHead) {
      this.listHead = newNode;
    } else {
      let current = this.listHead;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(key) {
    const newlistHead = new Node();
    newlistHead.key = key;

    if (this.listHead) {
      newlistHead.nextNode = this.listHead;
      this.listHead = newlistHead;
    } else {
      this.listHead = newlistHead;
    }
  }

  size() {
    if (this.listHead) {
      let count = 1;
      let current = this.listHead;
      while (current.nextNode) {
        current = current.nextNode;
        count++;
      }
      return count;
    } else {
      return 0;
    }
  }

  head() {
    if (this.listHead) {
      return this.listHead;
    } else {
      return;
    }
  }

  tail() {
    if (this.listHead) {
      let current = this.listHead;

      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    } else {
      return;
    }
  }

  pop() {
    if (this.listHead) {
      let current = this.listHead;
      let prev = null;

      while (current.nextNode) {
        prev = current;
        current = current.nextNode;
      }
      prev.nextNode = null;
    }
  }

  at(index) {
    if (this.listHead) {
      if (index === 0) {
        return this.listHead;
      } else {
        let current = this.listHead;
        let i = 0;

        while (current.nextNode) {
          current = current.nextNode;
          i++;
          if (i === index) {
            return current;
          }
        }
        return;
      }
    }
  }

  contains(key) {
    if (this.listHead) {
      let current = this.listHead;

      if (current.key === key) {
        return true;
      }

      while (current.nextNode) {
        current = current.nextNode;
        if (current.key === key) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  find(key) {
    if (this.listHead) {
      let current = this.listHead;
      let i = 0;

      if (current.key === key) {
        return 0;
      } else {
        while (current.nextNode) {
          current = current.nextNode;
          i++;
          if (current.key === key) {
            return i;
          }
        }
        return null;
      }
    }
  }

  removeAt(index) {
    if (!this.listHead) {
      return;
    }

    if (index === 0) {
      let next = this.listHead.nextNode;
      this.listHead = next;
      return;
    }

    let current = this.listHead;
    let prev = null;
    let i = 0;

    while (current && i < index) {
      prev = current;
      current = current.nextNode;
      i++;
    }

    if (current) {
      prev.nextNode = current.nextNode;
    }
  }

  arrFromNodes(element) {
    if (this.listHead) {
      let output = [this.listHead[element]];
      let current = this.listHead;

      while (current.nextNode) {
        current = current.nextNode;
        output.push(current[element]);
      }
      return output;
    } else {
      return;
    }
  }
}

export default linkedList;
