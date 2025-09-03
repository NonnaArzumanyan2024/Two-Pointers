/*
167. Two Sum II - Input Array Is Sorted - Easy
----------------------------------------------
Topic: Two Pointers, Array

Given a 1-indexed sorted array `numbers` and a target, 
return indices [index1, index2] (1-indexed) of two numbers 
that add up to target. Exactly one solution exists.

1. The array is sorted, so we can use the "two pointers" technique.
2. Start with one pointer at the beginning (left) and one at the end (right).
3. Check the sum of numbers[left] + numbers[right]:
   - If the sum is equal to target → we found the answer.
   - If the sum is smaller than target → move left forward (need bigger sum).
   - If the sum is larger than target → move right backward (need smaller sum).
4. Keep moving pointers until they meet.
5. Return the indices as [left+1, right+1] because the problem uses 1-indexing.
This works in O(n) time and O(1) extra space.
*/



var twoSum = function(numbers, target) {
    let left = 0;                                           // start pointer
    let right = numbers.length - 1;                         // end pointer
    
                                                            // move pointers until they meet
    while (left < right) {
        const sum = numbers[left] + numbers[right];         // current pair sum
        
        if (sum === target) {
            return [left + 1, right + 1];                   // found solution, 1-indexed
        } else if (sum < target) {
            ++left;                                         // need bigger sum
        } else {
            --right;                                        // need smaller sum
        }
    }
};


// ===== Test Cases =====
console.log(twoSum([2,7,11,15], 9));           // [1,2]
console.log(twoSum([2,3,4], 6));               // [1,3]
console.log(twoSum([-1,0], -1));               // [1,2]
console.log(twoSum([1,2,3,4,4,9,56], 8));      // [4,5]
console.log(twoSum([-5,-3,0,2,8,12], 9));      // [2,6]

