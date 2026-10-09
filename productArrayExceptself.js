function productExceptSelf(nums) {
  const answer = []; // where we store the answer after multiplying

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    answer.push(product);
  }

  return answer;
}

function productExceptSelfOptimal(nums) {
  const answer = new Array(nums.length).fill(1);

  let prefix = 1;

  // pass 1: product of everything to the left
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  //pass 2 : multiply everything to the right

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}

const nums = [1, 1, 1];
const nums2 = [2, 3, 4];

console.log("new Array:", productExceptSelf(nums));
console.log("new Array:", productExceptSelf(nums2));
console.log("new Array Optimal:", productExceptSelfOptimal(nums));
console.log("new Array Optimal:", productExceptSelfOptimal(nums2));
