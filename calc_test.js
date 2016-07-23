var assert = require('chai').assert;

suite('Calcuator', function() {

  setup(function() {
    var js = document.createElement("script");

	js.type = "text/javascript";
	js.src = "calc.js";

	document.body.appendChild(js);
  });

  suite('#add()', function() {
    test('should return 5 when sum 3 and 2', function() {
      assert.equal(5, Calc.sum(3, 2));
    });
  });

  suite('#sub()', function() {
    test('should return 1 when sub 3 and 2', function() {
      assert.equal(5, Calc.sub(3, 2));
    });
  });
});