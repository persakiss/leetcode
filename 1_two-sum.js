const twoSum = (nums, target) => {
  let tempArray = [];
  for(let i = 0; i < nums.length; i++) {
      for(let j = i+1; j < nums.length; j++) {
          if(nums[i] + nums[j] === target) {
              tempArray.push(i, j);
          }
      }
  }
  return tempArray;
}


console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([3,2,4], 6)) // [1, 2]
console.log(twoSum([3,3], 6)) // [0, 1]



// https://leetcode.com/submissions/detail/722826929/
// Runtime: 134 ms, faster than 39.49% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.6 MB, less than 58.10% of JavaScript online submissions for Two Sum.