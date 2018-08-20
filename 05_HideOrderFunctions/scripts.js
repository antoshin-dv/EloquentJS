'use strict'

// Свёртка массива массивов в один массив
function Flatten(arrays)
{
	return arrays.reduce(function(left, right)
	{
		return left.concat(right);
	}, []);
}

function Every(array, func)
{
	for (var i = 0; i < array.length; ++i)
		if (!func(array[i]))
			return false;
	return true;
}

function Some(array, func)
{
	for (var i = 0; i < array.length; ++i)
		if (func(array[i]))
			return true;
	return false;
}

var arrays = [[1, 2, 3], [4, 5], [6], [12, 22]];
console.log(Flatten(arrays));

// ====================================================
var ancestry = JSON.parse(ANCESTRY_FILE);

// Вычисление средней разницы в возрасте между матерями и их детьми
// Возвращет среднее значение массива
function average(array)
{
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

var nameToBorn = {};			// Связать имя женщины с её датой рождения
ancestry.forEach(function(person)
{
	if (person.sex === 'f')
		nameToBorn[person.name] = person.born;
});

// Возраст матери на момент рождения человека
var ages = ancestry.map(function(person)
{
	var nameMother = person.mother;
	if (nameMother in nameToBorn)
		return person.born - nameToBorn[nameMother];
	return 0;
});

// Убрать пустые значения
ages = ages.filter(function(value) { return value > 0; });

// Результат
console.log(average(ages));

// ====================================================
// Разбиение на столетия
function GroupBy(array, func)
{
	var result = {};
	for (var i = 0; i < array.length; ++i)
	{
		var groupName = func(array[i]);
		if (groupName in result)
			result[groupName].push(array[i]);	
		else
			result[groupName] = [array[i]];
	}
	return result;
}

var groupsOnCenturies = GroupBy(ancestry, function(person)
{
	return Math.ceil(person.died / 100);
});

for (var oneGroup in groupsOnCenturies)
{
	var ages = groupsOnCenturies[oneGroup].map(function(person) { return person.died - person.born; });
	console.log(oneGroup + ': ' + average(ages));
}

console.log(Every([NaN, NaN, NaN], isNaN));
console.log(Every([NaN, NaN, 4], isNaN));
console.log(Some([NaN, 3, 4], isNaN));
console.log(Some([2, 3, 4], isNaN));
