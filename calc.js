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

	/*
        mlt two numbers.
    */
	function mlt(num1, num2)
	{
		return num1 * num2;
	}

	/*
        div two numbers.
    */
	function div(num1, num2)
	{
		return num1 / num;
	}


	return {
		sum: sum,
		sub: sub,
		mlt: mlt,
		div: div
	};
})();
