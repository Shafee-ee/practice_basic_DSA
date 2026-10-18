function containDuplicate(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

function containDuplicatesOptimal(nums) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }
  return false;
}

function containMultipleDuplicates(nums) {
  const seen = new Set();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i]) && !result.includes(nums[i])) {
      result.push(nums[i]);
    }
    seen.add(nums[i]);
  }
  return result.length === 0 ? "No results found" : result;
}

function containMultipleDuplicatesSet(nums) {
  const seen = new Set();
  const duplicates = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      duplicates.add(nums[i]);
    }
    seen.add(nums[i]);
  }

  return duplicates.size === 0 ? "No results found" : [...duplicates];
}
const nums = [1, 2, 3, 4];
const nums1 = [1, 2, 3, 4, 2, 4, 4];

console.log(containDuplicate(nums));
console.log(containDuplicate(nums1));

console.log(containDuplicatesOptimal(nums));
console.log(containDuplicatesOptimal(nums1));

console.log(containMultipleDuplicates(nums));

console.log(containMultipleDuplicates(nums1));

console.log(containMultipleDuplicatesSet(nums));
console.log(containMultipleDuplicatesSet(nums1));
