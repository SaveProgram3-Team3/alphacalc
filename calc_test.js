suite('Calcuator', function() {


  setup(function() {
    var js = document.createElement("script");

	js.type = "text/javascript";
	js.src = "calc.js";

	document.body.appendChild(js);
  });

  suite('#add()', function() {
    test('should return 5 when sum 3 and 2', function() {
      // do something
    });
  });

  suite('#sub()', function() {
    test('should return 1 when sub 3 and 2', function() {
      // do something
    });
  });
});