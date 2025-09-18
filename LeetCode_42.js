/*
LeetCode 42. Trapping Rain Water
--------------------------------

Given an array `height` where each element represents the height of a bar,
compute how much water can be trapped after raining.

Approach:
Two-pointer technique:
- Move pointers inward from both ends.
- Keep track of the highest wall seen so far from left and right.
- At each step, water above the current bar equals
  (current max wall height − current bar height).

Time Complexity:  O(n)   // single pass
Space Complexity: O(1)   // constant extra space
*/



function trap(height) {
  let left = 0;                                   // left pointer
  let right = height.length - 1;                  // right pointer
  let leftMax = 0;                                // highest bar seen so far from the left
  let rightMax = 0;                               // highest bar seen so far from the right
  let totalWater = 0;                             // total trapped water

  while (left < right) {                          // continue until pointers meet
    if (height[left] < height[right]) {           // process the smaller side first
      if (height[left] >= leftMax) {
        leftMax = height[left];                   // update max on left side
      } else {
        totalWater += leftMax - height[left];     // water trapped at this position
      }
      ++left;                                     // move left pointer inward
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];                 // update max on right side
      } else {
        totalWater += rightMax - height[right];   // water trapped at this position
      }
      --right;                                    // move right pointer inward
    }
  }

  return totalWater;                              // total trapped water
}


// Test Cases

// Example from description: total = 8
console.log(trap([3, 0, 1, 0, 4, 2]));          // 8

// Classic LeetCode example
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));   // 6

// Monotone increasing -> no water
console.log(trap([1,2,3,4,5]));                 // 0

// Monotone decreasing -> no water
console.log(trap([5,4,3,2,1]));                 // 0

// Multiple valleys
console.log(trap([4,2,0,3,2,5]));               // 9
