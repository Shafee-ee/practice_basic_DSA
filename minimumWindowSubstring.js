function minWindow(str1, str2) {
  if (str1.length < str2.length) return ""; //first condition checked

  const targetFreq = {};
  const windowFreq = {};

  for (const char of str2) {
    targetFreq[char] = (targetFreq[char] || 0) + 1;
  } // all the characters from target string extracted and their frequency is added to target Freq

  let left = 0;
  let minLength = Infinity;
  let minStart = 0;
  let have = 0;

  console.log("Target Frequency:", targetFreq);
  const need = Object.keys(targetFreq).length;
  console.log(need);

  for (let right = 0; right < str1.length; right++) {
    const char = str1[right];
    windowFreq[char] = (windowFreq[char] || 0) + 1;
    if (targetFreq[char] && windowFreq[char] === targetFreq[char]) {
      have++;
    }

    while (have === need) {
      const windowLength = right - left + 1;
      if (windowLength < minLength) {
        minLength = windowLength;
        minStart = left;
      }

      const leftChar = str1[left];

      if (
        targetFreq[leftChar] &&
        windowFreq[leftChar] === targetFreq[leftChar]
      ) {
        have--;
      }
      windowFreq[leftChar]--;
      left++;
    }
  }

  return minLength === Infinity
    ? ""
    : str1.slice(minStart, minStart + minLength);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("aabdec", "abc")); // "abdec"
console.log(minWindow("a", "aa"));
