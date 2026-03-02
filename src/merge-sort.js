// Helper function: merges two already-sorted arrays into one sorted array
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and push the smaller one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  // Add any remaining elements from left (if any)
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add any remaining elements from right (if any)
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  console.log("This was printed recursively");

  return result;
}

// Main merge sort function (recursive)
function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide: split array roughly in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Conquer: recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Combine: merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

console.log("mergeSort([])                  →", mergeSort([]));
console.log("mergeSort([73])                →", mergeSort([73]));
console.log("mergeSort([1, 2, 3, 4, 5])     →", mergeSort([1, 2, 3, 4, 5]));
