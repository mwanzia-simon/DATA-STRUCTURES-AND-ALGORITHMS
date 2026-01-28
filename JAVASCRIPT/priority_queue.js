//This is just like a normal queue but it has priority passed in

function PriorityQueue() {
  let collection = [];

  //Function to print the collection
  this.printCollection = function () {
    console.log(collection);
  };

  //This function adds an element to the queue according to the priority
  this.enqueue = function (element) {
    //So what this basically does is add the element to the queue if the queue does not contain any other elements
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      //Here we are checking the element which has a  higher priority than the one passed
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) {
        collection.push(element);
      }
    }
  };

  //This function it to remove an element from the queue
  this.dequeue = function () {
    let value = collection.shift();
    return value[0]; //Only the element itself not the priority
  };

  //Returns the first element of the queue
  this.front = function () {
    return collection[0];
  };

  //Returns the length of the queue
  this.size = function () {
    return collection.length;
  };

  //Checks if the queue is empty or not
  this.isEmpty = function () {
    return collection.length === 0;
  };
}


let pq = new PriorityQueue()

pq.enqueue(["simon",3])
pq.enqueue(["makau",1])
pq.enqueue(["code",4])
pq.enqueue(["code",2])

pq.printCollection()