/*
560. Subarray Sum Equals K – Medium
------------------------------------

Given an integer array nums and an integer k, 
return the total number of continuous subarrays whose sum equals to k.

Example:
Input : nums = [1,2,3,3,6], k = 6
Output: 3
Explanation: [1,2,3], [3,3], [6]

Time  : O(n)
Space : O(n)  // hash map to store prefix sums
*/



function subarraySum(nums, k) {
    let count = 0;                          // number of subarrays found
    let sum = 0;                            // running prefix sum
    const map = new Map();                  // stores prefix sums and their frequency
    map.set(0, 1);                          // empty subarray sum

    for (let num of nums) {
        sum += num;                         // update prefix sum

        // if sum - k exists in map, it means a subarray sums to k
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // store/update current prefix sum in map
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}


// Test Cases 

console.log(subarraySum([1,2,3,3,6], 6));          // 3 -> [1,2,3],[3,3],[6]
console.log(subarraySum([1,1,1], 2));              // 2 -> [1,1],[1,1]
console.log(subarraySum([1,2,3], 3));              // 2 -> [1,2],[3]
console.log(subarraySum([1,-1,0], 0));             // 3 -> [1,-1],[0],[1,-1,0]
console.log(subarraySum([3,4,7,2,-3,1,4,2], 7));   // 4 -> [3,4],[7],[7,0],[4,2,1]
