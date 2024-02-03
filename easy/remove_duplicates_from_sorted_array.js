/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === nums[i]) {
      nums.splice(i, 1)
      i--
    } else {
      hash[nums[i]] = nums[i]
    }
  }

  console.log(nums)
  return Object.keys(hash).length
}

console.log(removeDuplicates([1, 1, 2]))
