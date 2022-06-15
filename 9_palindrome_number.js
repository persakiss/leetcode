const isPalindrome = (x) => {
  let digits = [x];
  let isPalindrome = true;

  /* Guard clause for negative numbers [always false] because a number won't end ith a negative symbol*/
  if(x < 0) {
      isPalindrome = false;
      return isPalindrome;
  }  
    
  /* Push numbers to array by x%10, then chopping off the digit by Math.trunc x/10 */
  while(x > 0) {
      digits.push(x%10);
      x = Math.trunc(x/10);
  }
  
  /* Compare one half of the array to the opposite half. Middle value doesn't matter */
  for(let i = 1; i < (digits.length / 2); i++) {
    if(digits[i] !== digits[digits.length - i]) {
      isPalindrome = false;
    }
  }
    
  return isPalindrome;
}

console.log(isPalindrome(6512156)); // true

// https://leetcode.com/submissions/detail/722860149/
// Runtime: 275 ms, faster than 40.46% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 50.9 MB, less than 63.24% of JavaScript online submissions for Palindrome Number.