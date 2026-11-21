const arr = [20, 49, 78, 67, 89, 90];
const target = 89;

console.log("linear search algorithm!");

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const result = linearSearch(arr, target);

if (result >= 0) {
  console.log(`Target found at index: ${result}`);
} else {
  console.log(`Target not found!`);
}
