/*
LeetCode 189. Rotate Array
---------------------------

Given an integer array `nums`, rotate the array to the right by `k` steps.

Idea:
1. Reverse the whole array.
2. Reverse the first k elements.
3. Reverse the rest.

Time Complexity:  O(n)  // we touch each element at most twice
Space Complexity: O(1)  // in-place rotation
*/



function rotate(nums, k) {

    function reverseSection(arr, start, end) {                   // Helper to reverse a section of the array in place
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];     // swap
            ++start;
            --end;
        }
    }

  k %= nums.length;                                              // handle k > nums.length
  nums.reverse();                                                // 1. reverse entire array
  
  reverseSection(nums, 0, k - 1);                                // 2. reverse first k elements
  reverseSection(nums, k, nums.length - 1);                      // 3. reverse the rest

  return nums;                                                   // rotated array in place
}


// Test Cases

console.log(rotate([1,2,3,4,5,6,7], 3));     // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2));      // [3,99,-1,-100]
console.log(rotate([1,2], 5));               // [2,1]  (k larger than length)
console.log(rotate([1], 0));                 // [1]
console.log(rotate([10,20,30,40], 1));       // [40,10,20,30]
