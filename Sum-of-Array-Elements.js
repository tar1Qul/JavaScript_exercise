function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([-1, -2, 3])); 
console.log(sumArray([])); 
