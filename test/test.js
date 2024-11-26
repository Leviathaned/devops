var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return 24 for factorial(4)', function() {
        assert.strictEqual(main.factorial(4), 24);
      });
});

describe('First two terms', function() {
  it('should return 1 for first two terms', function() {
      assert.strictEqual(main.factorial(0), 1);
      assert.strictEqual(main.factorial(1), 1);
    });
});

describe('Number below zero', function() {
  it('should return undefined for a number below 0', function() {
    assert.strictEqual(main.factorial(-2), undefined)
  })
})