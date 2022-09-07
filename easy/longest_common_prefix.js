const strs1 = ['flower', 'flow', 'flight'] // fl
const strs2 = ['dog', 'racecar', 'car'] // ''
const strs3 = ['a'] // 'a'
const strs4 = [] // ''
const strs5 = ['ab', 'a'] // 'a'

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  const sortArr = strs.sort((a, b) => a.length - b.length)
  let result = ''

  for (let i = 1; i <= sortArr[0].length; i++) {
    const newArr = sortArr.map((item) => item.slice(0, i))
    if (new Set([...newArr]).size === 1) {
      result = newArr[0]
    } else {
      break
    }
  }

  return result
}

console.log(longestCommonPrefix(strs1))
console.log(longestCommonPrefix(strs2))
console.log(longestCommonPrefix(strs3))
console.log(longestCommonPrefix(strs4))
console.log(longestCommonPrefix(strs5))
