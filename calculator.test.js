const calculate = require ('./calculator.js');

describe('My Calculation Tests', () => {
    test('Addition of a + b', () => {
        expect(calculate.add(4, 4)).toBe(8)
    });
  
    test('Subtractions  of a - b', () => {
        expect(calculate.subtract(4, 4)).toBe(0)
    });

    test('Divide  of a / b', () => {
        expect(calculate.divide(4, 4)).toBe(1)
    });

    test('Multiply  of a * b', () => {
        expect(calculate.multiply(4, 4)).toBe(16)
    });
  });