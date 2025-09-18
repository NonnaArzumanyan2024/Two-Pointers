/*
LeetCode 283. Move Zeroes
-------------------------

Move all zeros in the array `nums` to the end **in-place**,
while keeping the relative order of the non-zero elements.

Approach:
Two-pass technique:
First pass: copy each non-zero element forward into the next
   available position (`lastNonZeroIdx`).
Second pass: fill the remaining positions with zeros.

Time Complexity:  O(n)   // we traverse the array twice
Space Complexity: O(1)   // in-place, constant extra space
*/



function moveZeroes(nums) {
  let lastNonZeroIdx = 0;                        // position to place the next non-zero number

  // 1️. Shift all non-zero numbers forward
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== 0) {                         // found a non-zero element
      nums[lastNonZeroIdx] = nums[i];            // move it to the front region
      ++lastNonZeroIdx;                          // advance the insert position
    }
  }

  // 2. Fill the rest of the array with zeros
  for (let i = lastNonZeroIdx; i < nums.length; ++i) {
    nums[i] = 0;
  }

  return nums;                                   // modified array in place
}


// Test Cases

console.log(moveZeroes([0, 1, 2, 0, 5, 5]));     // [1, 2, 5, 5, 0, 0]
console.log(moveZeroes([0, 0, 0]));              // [0, 0, 0]
console.log(moveZeroes([4, 5, 6]));              // [4, 5, 6]  (no zeros)
console.log(moveZeroes([1, 0, 1, 0, 1]));        // [1, 1, 1, 0, 0]
console.log(moveZeroes([]));                     // []        (empty array)
