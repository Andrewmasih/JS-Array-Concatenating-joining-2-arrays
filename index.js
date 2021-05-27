/* concat() method,is a way to make 1 Array out of 2 Arrays, this method does not change the original Array, it creates a new array by joining 2 existing Arrays */


let firstLetters =["a", "b", "c"];

let lastLetters = ["d", "e", "f"];

let newArray1 = firstLetters.concat(lastLetters);

let newArray2 = lastLetters.concat(firstLetters);

console.log (newArray1);
console.log(newArray2);