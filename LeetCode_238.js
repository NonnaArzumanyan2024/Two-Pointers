/*
LeetCode 238. Product of Array Except Self – Medium
------------------------------------------

Given an integer array nums, return an array result
where result[i] is the product of all nums[j] 
for j ≠ i.

Example:
Input : [1,2,3,4]
Output: [24,12,8,6]

Time  : O(n)
Space : O(n)   (for the output array)
*/



function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Step 1: prefix products
    // result[i] will hold product of all elements to the LEFT of i
    let prefix = 1;
    for (let i = 0; i < n; ++i) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // Step 2: suffix products
    // multiply each result[i] by the product of all elements to the RIGHT of i
    let suffix = 1;
    for (let i = n - 1; i >= 0; --i) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}


// Test Cases 
console.log(productExceptSelf([1,2,3,4]));        // [24,12,8,6]
console.log(productExceptSelf([2,3,4,5]));        // [60,40,30,24]
console.log(productExceptSelf([1,1,1,1]));        // [1,1,1,1]
console.log(productExceptSelf([0,4,0]));          // [0,0,0]
console.log(productExceptSelf([-1,1,0,-3,3]));    // [0,0,9,0,0]
