'use strict'

// Свёртка массива массивов в один массив
function Flatten(arrays)
{
	return arrays.reduce(function(left, right)
	{
		return left.concat(right);
	}, []);
}

var arrays = [[1, 2, 3], [4, 5], [6], [12, 22]];
console.log(Flatten(arrays));