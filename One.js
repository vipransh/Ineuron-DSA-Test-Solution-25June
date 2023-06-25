class Stack {
  constructor() {
    this.stack = [];
  }

  // Push an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Pop and return the topmost element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot perform pop operation.";
    }
    return this.stack.pop();
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }
}


const stack = new Stack();

console.log(stack.isEmpty()); // Output: true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20
console.log(stack.pop()); // Output: 10
console.log(stack.pop()); // Output: Stack is empty. Cannot perform pop operation.

