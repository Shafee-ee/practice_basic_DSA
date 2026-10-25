function permutation(string1, string2) {
  if (string1.length > string2.length) return false;
  const targetFreq = {}; // target object initialized
  const windowFreq = {}; // wondow frequency initialized

  //count characters in string 1
  for (const char of string1) {
    targetFreq[char] = (targetFreq[char] || 0) + 1;
  }

  let left = 0;

  for (let right = 0; right < string2.length; right++) {
    const char = string2[right];
    windowFreq[char] = (windowFreq[char] || 0) + 1;

    //keep window size at most string 1 length
    if (right - left + 1 > string1.length) {
      const leftChar = string2[left];
      windowFreq[leftChar]--;
      left++;
    }

    //compare frequencies once the window reaches the required size
    if (
      right - left + 1 === string1.length &&
      matches(targetFreq, windowFreq)
    ) {
      return true;
    }
  }

  return false;
}

function matches(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);

  for (const char of keys) {
    if ((a[char] || 0) !== (b[char] || 0)) {
      return false;
    }
  }
  return true;
}

const string1 = "abc";
const string2 = "eidcabooo";

console.log(permutation(string1, string2));
