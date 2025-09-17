/*
LeetCode 845. Longest Mountain in Array
---------------------------------------

Find the length of the longest subarray that strictly
increases to a peak and then strictly decreases.

Time Complexity:  O(n)  // Single pass with two inner while-loops
Space Complexity: O(1)  // Constant extra space
*/



function longestMountain(arr) {
  let maxLen = 0;                                                            // store the longest mountain length
  let i = 1;                                                                 // start from index 1 (can't be a peak at index 0)

  while (i < arr.length - 1) {                                               // last index can't be a peak
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {                        // Check if arr[i] is a peak (strictly greater than neighbors)
      let left = i - 1;                                                      // move left pointer to expand the uphill
      let right = i + 1;                                                     // move right pointer to expand the downhill

      while (left > 0 && arr[left - 1] < arr[left]) {                        // go left while strictly increasing (backwards)
        --left;
      }

      while (right < arr.length - 1 && arr[right] > arr[right + 1]) {        // go right while strictly decreasing
        ++right;
      }

      maxLen = Math.max(maxLen, right - left + 1);                           // update maximum length of mountain found
      i = right;                                                             // skip ahead to the end of this mountain
    } else {
      ++i;                                                                   // not a peak, move forward
    }
  }

  return maxLen;                                                             // length of the longest mountain
}


// Test Cases
console.log(longestMountain([2,1,4,7,3,2,5]));       // 5  -> mountain [1,4,7,3,2]
console.log(longestMountain([2,2,2]));               // 0  -> no mountain
console.log(longestMountain([1,2,3,4,5,4,3,2,1]));   // 9  -> whole array is a mountain
console.log(longestMountain([0,1,0]));               // 3
console.log(longestMountain([1,2,2,3,4,4,5]));       // 0  -> no strict mountain
