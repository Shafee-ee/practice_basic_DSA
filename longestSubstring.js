function longestSubstring(str) {
  let i = 0;
  let j = 0;

  const seen = new Set();

  let maxLength = 0;

  while (j < str.length) {
    const current = str[j];

    while (seen.has(current)) {
      seen.delete(str[i]);
      i++;
    }
    seen.add(current);

    const currentLength = j - i + 1;
    
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
    j++;
  }
  return maxLength;
}

console.log(longestSubstring("abcabcbb")); // 3
console.log(longestSubstring("bbbbb")); // 1
console.log(longestSubstring("pwwkew")); // 3
