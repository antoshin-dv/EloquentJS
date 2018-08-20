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