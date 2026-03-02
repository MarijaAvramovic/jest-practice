function fibsRec(n) {
  // Base cases
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  // Recursive case: get previous sequence and add next number
  const prev = fibsRec(n - 1);
  const next = prev[prev.length - 1] + prev[prev.length - 2];
  
  return [...prev, next];
}

 

console.log("\nRecursive fibsRec:");
console.log("fibsRec(0)  →", fibsRec(0));    // []
console.log("fibsRec(1)  →", fibsRec(1));    // [0]
console.log("fibsRec(2)  →", fibsRec(2));    // [0, 1]
console.log("fibsRec(8)  →", fibsRec(8));    // [0, 1, 1, 2, 3, 5, 8, 13]
console.log("fibsRec(12) →", fibsRec(12));   // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]