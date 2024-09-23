// Print pair of sum of two elements of an Array
const nums = [2, 4, 15, 5, 7, -4, 2, 25, 10];
function sumZeroPair(nums) {
  const pair = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum === 0) {
        pair.push(nums[i]);
        pair.push(nums[j]);
        return pair;
      }
    }
  }
}
const p = sumZeroPair(nums);
console.log(p);
