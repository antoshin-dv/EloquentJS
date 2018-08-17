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

// -------------------------------------------
// Функции для работы со списками
/*
	Структура списками:
		data - данные;
		next - указатель на следующий элемент списка
*/

// Добавить элемент в список
function Append(list, value)
{
	// Создаём новый список
	if (!('next' in list))
	{
		list.data = value;
		list.next = null;
		return list;
	}
	
	var node = list;
	while (node.next !== null)
		node = node.next;
	
	var newNode = {
		data: value,
		next: null
	}
	node.next = newNode;
	return newNode;
}

// Добавить элемент в начало списка
function Prepend(list, value)
{
	return { 
		data: value,
		next: list
	};
}

// Вернуть элемент списка по индексу
function Nth(list, index)
{
	if (!('next' in list) || index < 0)
		return undefined;
	if (index === 0)
		return list.data;
	if (list.next === null)
		return undefined;
	return Nth(list.next, --index);
}

// Преобразует массив в список
function ArrayToList(array)
{
	var result = {};
	var node = result;
	for (var i = 0; i < array.length; i++)
		node = Append(node, array[i]);
	return result;
}

// Преобразует список в массив
function ListToArray(list)
{
	var result = [];
	if ('next' in list)
	{
		var node = list;
		while (node.next)
		{
			result.push(node.data);
			node = node.next;
		}
		result.push(node.data);
	}	
	return result;
}
// -------------------------------------------

console.log('Проверка функций Range и Sum');
console.log(Range(1, 10))
console.log(Range(5, 2, -1));
console.log(Sum(Range(1, 10)));

console.log('Проверка функций ReverseArray и ReverseArrayInPlace');
console.log(ReverseArray(Range(1, 10, 2)));
var arrayValue = Range(3, 21, 3);
ReverseArrayInPlace(arrayValue);
console.log(arrayValue);

console.log('Проверка функций для работы со списком');
console.log(ArrayToList(Range(10, 20)));
console.log(ListToArray(ArrayToList(Range(10, 30, 2))));
console.log(Prepend(Prepend(null, 20), 10));
console.log(Nth(ArrayToList([10, 20, 30]), 1));
