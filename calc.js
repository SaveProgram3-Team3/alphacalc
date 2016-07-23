var Calc = (function () {
    /*
        Sum two numbers.
    */
    function sum(num1, num2)
    {
		return num1 + num2;
    }

    /*
        Sub two numbers.
    */
	function sub(num1, num2)
	{
		return num1 - num2;
	}

	return {
		sum: sum,
		sub: sub
	};
})();
