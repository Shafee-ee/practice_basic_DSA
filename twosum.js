//two sum brute
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }
}

function twoSumOptimal(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (seen.has(needed)) {
      return [nums[seen.get(needed)], nums[i]];
    }

    seen.set(nums[i], i);
  }
}

const nums = [2, 7, 11, 15];
const target = 18;
console.log(twoSum(nums, target));
console.log(twoSumOptimal(nums, target));
