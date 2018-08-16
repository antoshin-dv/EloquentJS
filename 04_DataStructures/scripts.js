function range(begin, end, step)
{
	if (step === undefined)
		step = 1;
	
	var result = [];
	if (step > 0)
		for (var i = begin; i <= end; i += step)
			result.push(i);
	else
		for (var i = begin; i >= end; i += step)
			result.push(i);
	return result;
}

function sum(array)
{
	var result = 0;
	for (var i = 0; i < array.length; i++)
		result += array[i];
	return result;
}

console.log(range(1, 10))
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));