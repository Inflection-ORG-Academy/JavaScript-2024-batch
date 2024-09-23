// Basic Array
const table = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
// Checking the total length of an Array
console.log(table.length);
console.log(table[3]);

// Iterating the Array using for loop
for (let index = 0; index <= table.length - 1; index++) {
  const element = table[index];
  console.log(element);
}
console.log(table.lastIndexOf(50));
// ======================================
// Filter Only Even Number form given Array
const counting = [5, 10, 2, 17, 19, 25, 314, 50];
const even = [];

for (let index = 0; index < counting.length; index++) {
  const remainder = counting[index] % 2;

  if (remainder == 0) {
    even.push(counting[index]);
    console.log(even);
  }
}
// ---------------------------------------------------------
// Store all less than 10 numbers into an new Array

const nums = [7, 8, 25, 13, 15, 17, 18, 20, 3, 2, 1, 22];

function showNumbers(givenArr) {
  const newNums = [];
  for (let index = 0; index <= givenArr.length - 1; index++) {
    if (givenArr[index] < 10) {
      newNums.push(givenArr[index]);
    }
  }
  console.log(newNums);
}

showNumbers(nums);
showNumbers([1, 100, 5, 2555, 6, 7, 15, 8, 50, 9, 0]);
