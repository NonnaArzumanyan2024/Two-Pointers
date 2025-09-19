/*
LeetCode 724. Find Pivot Index  – Easy
--------------------------------

Given an array nums, return the pivot index:
an index where the sum of all numbers to the left
equals the sum of all numbers to the right.

If no such index exists, return -1.

Example:
Input : [1,2,3,4,-1]
Output: 2

Time  : O(n)
Space : O(1)
*/



function pivotIndex(nums) {
    // Step 1: find the total sum (we’ll treat it as the initial right side)
    let totalSum = 0;
    for (let num of nums) totalSum += num;

    // Step 2: walk through the array, keeping track of the left side sum
    let leftSum = 0;

    for (let i = 0; i < nums.length; ++i) {
        // Right side sum is total minus left minus current element
        let rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i; // found the pivot index
        }

        // Add current element to the left side for next step
        leftSum += nums[i];
    }

    // If we never return inside the loop, no pivot exists
    return -1;
}


// Test Cases
console.log( pivotIndex([1,2,3,4,-1]) );    // 2
console.log( pivotIndex([2,1,-1]) );        // 0
console.log( pivotIndex([1,7,3,6,5,6]) );   // 3
console.log( pivotIndex([1,2,3]) );         // -1
console.log( pivotIndex([0,0,0,0]) );       // 0
