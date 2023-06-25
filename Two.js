class Queue {
    constructor() {
      this.queue = [];
    }
  
    // Enqueue an element at the rear of the queue
    enqueue(element) {
      this.queue.push(element);
    }
  
    // Dequeue and return the frontmost element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty. Cannot perform dequeue operation.";
      }
      return this.queue.shift();
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  
  const queue = new Queue();
  

  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  
  console.log(queue.dequeue()); // Output: 10
  console.log(queue.dequeue()); // Output: 20
  console.log(queue.dequeue()); // Output: 30
  console.log(queue.dequeue()); // Output: Queue is empty. Cannot perform dequeue operation.

  