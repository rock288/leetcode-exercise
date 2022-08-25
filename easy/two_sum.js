const nums = [2, 7, 11, 15]
const target = 17

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i]
    }

    hash[nums[i]] = i
  }

  return []
}

console.log(twoSum(nums, target))
