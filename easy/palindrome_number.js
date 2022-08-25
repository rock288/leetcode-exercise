const x = 121 // -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString()
  if (str.split('').reverse().join('') === str) return true

  return false
}

console.log(isPalindrome(x))
