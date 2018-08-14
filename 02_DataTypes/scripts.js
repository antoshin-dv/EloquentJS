// Функция выводит треугольник из символов character высотой height
function Rectangle(character = '#', height = 7)
{
	var result = '';
	for (var i = 0; i < height; i++)
	{
		var str = '';
		for (var j = 0; j <= i; j++)
			str += character;
		
		result += str;
		result += '\n';
	}		
	
	return result;
}

// Выводит все числа от 1 до count, с тремя исключениями:
// Для чисел, делящихся на 3, выводится 'Fizz',
// Для чисел, делящихся на 5 (но не на 3) выводится 'Buzz'
// Для чисел, делящихся и на 3, и на 5 выводится 'FizzBuzz'
function FizzBuzz(count = 100)
{
	var result = '';
	for (var i = 1; i <= count; i++)
	{
		var fizzOrBuzz = false;
		
		if (i % 3 == 0)
		{
			result += 'Fizz';
			fizzOrBuzz = true;
		}
		if (i % 5 == 0)
		{
			result += 'Buzz';
			fizzOrBuzz = true;
		}
		
		if (!fizzOrBuzz)
			result += i;
		result += ' ';
	}
	return result;
}

// Возвращает квадратную шахматную доску размером count, в которой линии разделяются символами новой строки.
// На каждой позиции либо пробел, либо character.
function Chessboard(character = '#', count = 8)
{
	var result = '';
	for (var i = 0; i < count; i++)
	{
		var str = '';
		for (var j = 0; j < count; j++)
			str += ((i + j) % 2 == 0) ? character : ' ';
			
		result += str + '\n';
	}
	
	return result;
}

console.log(Rectangle());
console.log(FizzBuzz());
console.log(Chessboard());