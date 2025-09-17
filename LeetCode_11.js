/*
LeetCode 11. Container With Most Water
--------------------------------------

Given an integer array `height` where each element represents a vertical line at index i,
find two lines that together with the x-axis form a container that holds the most water.
Return the maximum amount of water a container can store.

Approach:
Two-pointer technique:
- Start with pointers at both ends.
- Calculate area at each step.
- Move the pointer pointing to the shorter line inward,
  because the area is limited by the shorter height.

Time Complexity : O(n)   // single pass through the array
Space Complexity: O(1)   // only a few extra variables
*/




function maxWaterContainer(height) {
    let left = 0;                                                           // pointer to the start of array
    let right = height.length - 1;                                          // pointer to the end of array
    let maxArea = 0;                                                        // stores the best area found so far

    while (left < right) {
        const width = right - left;                                         // current container width
        const currentHeight = Math.min(height[left], height[right]);        // container height is limited by the shorter line
        const area = currentHeight * width;                                 // compute area and update maximum if needed
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {                                 // move the pointer at the shorter line inward
            ++left;                                                         // try to find a taller line from the left side
        } else {
            --right;                                                        // try to find a taller line from the right side
        }
    }

    return maxArea;
}


//  Test Cases

console.log(maxWaterContainer([1,8,6,2,5,4,8,3,7]));   // Output: 49
console.log(maxWaterContainer([1,1]));                 // Output: 1
console.log(maxWaterContainer([4,3,2,1,4]));           // Output: 16
console.log(maxWaterContainer([1,2,1]));               // Output: 2
console.log(maxWaterContainer([2,3,10,5,7,8,9]));      // Output: 36  
