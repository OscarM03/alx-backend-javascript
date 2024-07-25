const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('should return 4 when a is 1 and b is 3', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when a is 1 and b is 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5 when a is 1.2 and b is 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 6 when a is 1.5 and b is 3.7', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should return -2 when a is -1.4 and b is -0.5', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -0.5), -2);
    });

    it('should return -1 when a is 0.4 and b is -1.5', () => {
      assert.strictEqual(calculateNumber('SUM', 0.4, -1.5), -1);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('should return 2 when a is 3 and b is 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    });

    it('should return 3 when a is 3.7 and b is 1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
    });

    it('should return 3 when a is 3.7 and b is 1.2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    });

    it('should return 2 when a is 3.7 and b is 1.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
    });

    it('should return 1 when a is -0.5 and b is -1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -0.5, -1.4), 1);
    });

    it('should return 2 when a is 0.4 and b is -1.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.4, -1.5), 2);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('should return 2 when a is 4 and b is 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
    });

    it('should return 2 when a is 4.2 and b is 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.2, 2), 2);
    });

    it('should return 3 when a is 6 and b is 1.8', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 1.8), 3);
    });

    it('should return 4 when a is -8 and b is -1.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8, -1.5), 4);
    });

    it('should return "Error" when a is 4 and b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    });
  });
});
