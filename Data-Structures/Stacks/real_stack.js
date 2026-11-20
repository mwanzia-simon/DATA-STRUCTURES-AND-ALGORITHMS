//This is how you actually impliment a stack in js
//First we will start by intitalizing the stack

//Follows the principle of FILO (First in last out)

let Stack = function () {
  this.count = 0; //To keep track of items in the stack
  this.storage = {}; //to store the actual items of the stack

  //Below is a function to add a value to the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  //function to remove and return the last value of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--; //Because this is the length and indexes start from 0 so -1 to get the last index

    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //Function to return the size of the stack which is  basically the this.count variable value
  this.size = function () {
    return this.count;
  };

  //Function to return the last item in the stack and will not remove the item like the pop function does
  this.peek = function () {
    return this.storage[this.count - 1]; //Because count is like the length of the stack so -1 we get the last item
  };
};

let mystack = new Stack();
mystack.push(1);
mystack.push(2);
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());
mystack.push("Simon");
console.log(mystack.size());
console.log(mystack.peek());
