function test(a, b) {
  const sum = a + b;
  console.log("first console:", sum);
}

const result = test(56, 184);
console.log(result);

console.log("********************For loop practice ***************");

const word = "HELLO";

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
console.log(word.length);
console.log(word.length - 1);
