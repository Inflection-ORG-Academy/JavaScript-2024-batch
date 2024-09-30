const nums = [4, 5, 10, 96, 30];

// Reading Array Length
console.log(nums.length);

// Pushing an Element at the last index of an Array
nums.push(85);

console.log(nums); // [4, 5, 10, 96, 30, 85]

// Removing last from an Array
nums.pop(); //[4, 5, 10, 96, 30]
nums.pop(); // [4, 5, 10, 96]

console.log(nums);

//  Iterating an Array using forEach Method

// Using Seprate Function
function printEL(el) {
  console.log(el);
}

nums.forEach(printEL);

// Using Anonymous Function
nums.forEach((el) => {
  console.log(el);
});

const newArr = [];

nums.forEach((el) => {
  const sum = el + 50;
  newArr.push(sum);
});

console.log(newArr);

// ====== MAP Method =============

const mapNewArr = nums.map((el) => el + 10);

console.log(mapNewArr);

nums.forEach((el, index) => {
  if (el == 7) {
    console.log(index);
  }
});
