// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const input1 = '('
const input2 = '[])'
const input3 = '()[]{}'
const input4 = '{[]}'

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false
  }

  const data = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (data[s[i]]) {
      stack.push(s[i])
      continue
    }

    if (s[i] !== data[stack.pop()]) {
      return false
    }
  }

  return stack.length === 0
}

console.log(isValid(input1))
console.log(isValid(input2))
console.log(isValid(input3))
console.log(isValid(input4))
