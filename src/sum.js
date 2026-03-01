export function sum(a, b) {
  return a + b;
}
  

export function capitalize(str) {
  if (!str) return ''
  return str[0].toUpperCase() + str.slice(1);
}

export  function reverseString(str) {
  return str.split('').reverse().join('')
};

export const calculator = {
  add(a, b) {
    return a + b
  },

  subtract(a, b) {
    return a - b
  },

  multiply(a, b) {
    return a * b
  },

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero')
    }
    return a / b
  }
}

export function shiftChar(char, shift) {
  const isUpper = char >= 'A' && char <= 'Z'
  const isLower = char >= 'a' && char <= 'z'

  if (!isUpper && !isLower) return char // non-alphabetic characters remain the same

  const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0)
  const charCode = char.charCodeAt(0) - base
  const shifted = (charCode + shift + 26) % 26 // +26 to handle negative shifts
  return String.fromCharCode(shifted + base)
}

export  function caesarCipher(str, shift) {
  return str
    .split('')
    .map(char => shiftChar(char, shift))
    .join('')
}

 