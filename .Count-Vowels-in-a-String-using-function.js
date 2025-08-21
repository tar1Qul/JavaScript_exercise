function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Test cases
console.log(countVowels("hello"));  
console.log(countVowels("AEIOU"));  
console.log(countVowels("bcdfg"));   
