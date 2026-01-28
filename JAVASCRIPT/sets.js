//So this data structure is like an array but it has no duplicate items
// THIS ARE THE FUNCTIIONS OF THE SET
/*
this.has 
this.values
this.add
this.remove
this.size

*/
//This is how we impliment a set

function myset() {
  let collection = []; //This is where to store the values of the set

  //This  is a function to check if an item exits in the set and it will return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1; //Note that if an element does not exist in an array the return value is always a -1
  };

  //This function will return the values of the set
  this.values = function () {
    return collection;
  };

  //This is a function to add an element to the set
  this.add = function (element) {
    //First to check if the element exits in the set
    if (!this.has(element)) {
      collection.push(element);
      return true; //To show that the element was added
    }
    return false; //To show that the element aready exits in the set and was not added
  };

  //This function will remove an element from the set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true; //Meaning that the element was found and removed
    }
    return false; //Meaning that the element was not found hence not removed
  };

  //Function to return the size of the set
  this.size = function () {
    return collection.length;
  };

  //This Function combines two sets to one leaving behind all the dulicates
  this.union = function (otherSet) {
    let unionSet = new myset();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  };

  //This function will return the values which are both present in the  two sets
  this.intersection = function (otherSet) {
    let intersectionSet = new myset();
    let firstSet = this.values();

    //So this for each loop checks the similar values from the two sets and saves them to intersection set
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //This function checks the difference in the two sets so the values that are in one set and are not in the other set
  this.difference = function (otherSet) {
    let differenceSet = new myset();
    let firstSet = this.values();

    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  //This function will test if the set is a subset of the other meaning one set contains a value in the first set

  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  };
}

let setA = new myset()
let setB = new myset()

setA.add(1)
setA.add(2)
setA.add(3)
setB.add(2)
setB.add(8)
setB.add(9)

console.log(setA.union(setB).values())
console.log(setA.subset(setB))
console.log(setA.difference(setB).values())
console.log(setA.intersection(setB).values())