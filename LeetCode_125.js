/*
125. Valid Palindrome 
-----------------------------

Given a string, return true if it is a palindrome, and false otherwise.  
Only consider alphanumeric characters and ignore cases.  

Example 1:
Input: "anna"
Output: true

Example 2:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 3:
Input: "race a car"
Output: false

Time Complexity: O(n)
Space Complexity: O(1)
*/



function task(str) {
    str = str.toLowerCase();              // Convert the entire string to lowercase so comparisons are case-insensitive
    let left = 0;                         // Initialize a pointer at the start of the string
    let right = str.length - 1;           // Initialize a pointer at the end of the string

    while (left < right) {                // Loop until the two pointers meet in the middle

        // Move the left pointer forward while it points to a non-alphanumeric character
        while (left < right && !isAlphaNumeric(str[left])) {
            ++left;
        }

        // Move the right pointer backward while it points to a non-alphanumeric character
        while (left < right && !isAlphaNumeric(str[right])) {
            --right;
        }

        // Compare the characters at the two pointers; if they differ, it’s not a palindrome
        if (str[left] !== str[right]) {
            return false;                 // Early exit if a mismatch is found
        }

        // Move both pointers inward to continue checking the next pair
        ++left;
        --right;
    }

    return true;                           // All matching pairs found; the string is a valid palindrome
}

// Helper function: returns true if the character is a letter or digit, false otherwise
function isAlphaNumeric(ch) {
    return /[a-z0-9]/.test(ch);            // Test the character against a regex for lowercase letters or digits
}


// Test Cases

console.log(task("anna"));                               // true
console.log(task("A man, a plan, a canal: Panama"));     // true
console.log(task("race a car"));                         // false
console.log(task(" "));                                  // true (empty or only spaces is palindrome)
console.log(task("12321"));                              // true
