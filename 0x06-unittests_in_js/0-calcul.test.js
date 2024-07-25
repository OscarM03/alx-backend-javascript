const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round up both a and b when a is 1.6 and b is 2.5', () => {
    assert.strictEqual(calculateNumber(1.6, 2.5), 5);
  });

  it('should round up a when a is 2.7 and b is 3.1', () => {
    assert.strictEqual(calculateNumber(2.7, 3.1), 6);
  });

  it('should round down b when a is 2.3 and b is 4.4', () => {
    assert.strictEqual(calculateNumber(2.3, 4.4), 6);
  });

  it('should round up a when a is 4.6 and b is 1.4', () => {
    assert.strictEqual(calculateNumber(4.6, 1.4), 6);
  });

  it('should round up both a and b when a is 3.8 and b is 4.7', () => {
    assert.strictEqual(calculateNumber(3.8, 4.7), 9);
  });

  it('should round up a when a is 5.5 and b is 2.2', () => {
    assert.strictEqual(calculateNumber(5.5, 2.2), 8);
  });

  it('should handle rounding with trailing 9’s when a is 4.499999 and b is 5.499999', () => {
    assert.strictEqual(calculateNumber(4.499999, 5.499999), 10);
  });
});

