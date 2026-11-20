//This data structure is similar to a stack but follow the principle FIFO First in first out

function Queue() {
  collection = [];

  //This function just prints out the values in the queue
  this.print = function () {
    console.log(collection);
  };

  //This function pushes an element to the queue
  this.enqueue = function (element) {
    collection.push(element);
  };

  //This function removes an element from the queue
  this.dequeue = function () {
    return collection.shift();
  };

  //Returns the first element of the queue
  this.front = function () {
    return collection[0];
  };

  //Returns the length of the queue
  this.size = function () {
    return collection.length;
  };

  //This function checks if the queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}


let queueA = new Queue()

queueA.enqueue(1)
queueA.enqueue(2)
queueA.enqueue(3)
queueA.enqueue(4)

//queueA.dequeue()
console.log(queueA.front())
console.log(queueA.size())
console.log(queueA.isEmpty())
queueA.print()