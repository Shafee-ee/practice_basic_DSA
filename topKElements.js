function topFrequent(nums, k) {
  const freq = new Map();

  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }
  console.log(freq);
}

function topKFrequent(nums, k) {
  const freq = new Map();
  //step 1: count each number
  for (let i = 0; i < nums.length; i++) {
    freq.set(nums[i], freq.get(nums[i]) + 1);
  }

  //step 2:Convert Map entries in to an array
  const entries = Array.from(freq);

  //step 3: Sort by frequencies, highest first priority
  entries.sort((a, b) => b[1] - a[1]);

  //step 4: Take the top k numbers
  return entries.slice(0, k).map((entry) => entry[0]);
}

const nums = [2, 2, 2, 2, 1, 1, 3, 3, 3];
const k = 2;

topFrequent(nums, k);

console.log(topKFrequent(nums, k));
