function isPalindrome(word) {
  // Write your algorithm here
  // Step 1: Ensure there are no  spaces and special characters and convert to lowercase
  word = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

  // Step 2: Initialize left and right pointers
  let left = 0;
  let right = word.length - 1;

  // Step 3: Check if it's a palindrome
  while (left < right) {
    // Step 4a: If characters at left and right are not the same, return false
    if (word[left] !== word[right]) {
      return false;
    }
    // Step 4b: Increment left and decrement right
    left++;
    right--;
  }

  // Step 5: If the loop ends without returning false, return true
  return true;
}



/* 
  Add your pseudocode here
//   1. Ensure there are no spaces and special characters from inputString.
//   2. Convert inputString to lowercase and only use letters.
//   3. Initialize two pointers, left and right, to the start and end of the string.
//   4. Loop while left is less than or equal to right:
//       a. If characters at left and right are not the same, return false.
//       b. Increment on the lef side and decrement to the right side.
//   5. If the loop ends without returning false, return true.

/*
  Add written explanation of your solution here
  This code is made to check whether the given string is a palindrome
  The algorithm first removes spaces and special characters from the input string and converts it to lowercase.
  Then, it uses two pointers, one starting from the beginning of the string (left) and one from the end (right).
  It iterates through the string, comparing characters at these pointers.
  If at any point, the characters are not the same, it returns false, indicating that the string is not a palindrome.
  If the loop completes without finding any mismatches, it returns true, indicating that the string is a palindrome.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("A man a plan a canal Panama"));

  console.log("");

}

module.exports = isPalindrome;
