//Stack is basically an array and below is an example of a simple program to check for a palidrome

let letters = [];
let word = "racecar";
let rword = "";

//here is a for loop to push all the letters of the word to the letters array
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//Another for loop to pop the letters in reverse to the rword variable
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

//if condition to check if the word and the rword match
if (word === rword) {
  console.log(`${word} is a palidrome`);
} else {
  console.log(`${word} is not a palidrome`);
}
