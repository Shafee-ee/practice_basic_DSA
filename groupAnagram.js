function groupAnagrams(words) {
  const groups = new Map();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log("firstword:", word);
    const key = word.split("").sort().join("");
    console.log("first key:", key);

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(word);
    console.log("first group:", groups);
  }

  return Array.from(groups.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "nat", "ate", "bat"]));
