export class Stack {
  constructor () {
    this.data = [];
  }

  pop()  {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.data.length == 0) {
        return "Underflow";
    } else {
    return this.data.pop();
    }
  }

  top () {
    return this.data.length;
  }

  push (element) {
      console.log(element)
      this.data.push(element)
  }

    // peek() method looks at the object at the top of this stack
    // without removing it from the stack.
    // The stack is not modified (it does not remove the element;
    // it only returns the element for information purposes).

  peek () {
      return this.data[this.data.length - 1];
  }

  clear () {
      return this.data = [];
  }

  length(){
    return this.data.length;
  }

  search (value) {
      for (let i = 0; i < this.data.length; i++) {
          if (this.data[i] === value) {
              return value;
          } else {
              return false;
          }
      }
  }
}
