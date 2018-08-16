// Возвращает массив, который содержит все числа из диапазона begin, end с шагом step
function Range(begin, end, step)
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

// Возвращает сумму чисел в массиве
function Sum(array)
{
	var result = 0;
	for (var i = 0; i < array.length; i++)
		result += array[i];
	return result;
}

// Меняет порядок элементов в массиве на обратный. Возвращает новый массив.
function ReverseArray(array)
{
	var result = [];
	for (var i = array.length - 1; i >= 0; i--)
		result.push(array[i]);
	return result;
}

// Меняет порядок элементов в массиве на обратный. Изменяет переданный массив.
function ReverseArrayInPlace(array)
{
	for (var i = 0, j = array.length - 1; i < array.length / 2; i++, j--)
	{
		var k = array[i];
		array[i] = array[j];
		array[j] = k;
	}
}

console.log('Проверка функций Range и Sum');
console.log(Range(1, 10))
console.log(Range(5, 2, -1));
console.log(Sum(Range(1, 10)));

console.log('Проверка функций ReverseArray и ReverseArrayInPlace');
console.log(ReverseArray(Range(1, 10, 2)));
var arrayValue = Range(3, 21, 3);
ReverseArrayInPlace(arrayValue);
console.log(arrayValue);