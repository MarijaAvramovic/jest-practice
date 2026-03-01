import { sum, capitalize, reverseString, calculator, caesarCipher, shiftChar} from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize first letter', () => {
    expect(capitalize('marija')).toBe('Marija')
});
test('reverse string', () => {
    expect(reverseString('djoka')).toBe('akojd')
})

test('adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5)
})

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2)
})

test('multiplies two numbers', () => {
  expect(calculator.multiply(4, 3)).toBe(12)
})

test('divides two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5)
})

 

test('shifts letters by the given factor', () => {
  expect(caesarCipher('abc', 3)).toBe('def')
})

test('wraps around from z to a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('preserves original letter case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('does not change punctuation, spaces, or numbers', () => {
  expect(caesarCipher('Hello, World! 123', 3)).toBe('Khoor, Zruog! 123')
})

test('handles negative shift', () => {
  expect(caesarCipher('def', -3)).toBe('abc')
})