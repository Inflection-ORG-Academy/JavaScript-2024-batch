// Print pair of sum of two elements of an Array
// const nums = [2, 4, 15, 5, 7, -4, 2, 25, 10];
// function sumZeroPair(nums) {
//   const pair = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j];
//       if (sum === 0) {
//         pair.push(nums[i]);
//         pair.push(nums[j]);
//         return pair;
//       }
//     }
//   }
// }
// const p = sumZeroPair(nums);
// console.log(p);
// ---------------------------------------------
// Reverse an Array

// First Method
const persons = ['Mohan', 'Sohan', 'Rohan', 'Ram', 'Shyam', 'Shiv', 'Anukash'];

const reversPers = [];

for (let i = persons.length - 1; i >= 0; i--) {
  reversPers.push(persons[i]);
}

console.log(reversPers);

// ----------------------------------------------------------

// Second Method

// Created a function which takes an Array as an argument and return a reverse Array of gievn Array
function reversArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const leftElement = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = leftElement;
  }
  return arr;
}
console.log(reversArray(persons));

// Method 3 Using Array reverse method
const rev = persons.reverse();
console.log(rev);
